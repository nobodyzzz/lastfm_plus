var artistMap = {};
var userMap = {};

//TODO: https://github.com/lloyd/JSONSelect
function artistJSONToHtml(artist)
{
	var infoHtml = $("<div />");
	var similar = '<div id="similar" align="center"><table><tr colspan="5"><b style="font-size:120%">Similar Artists</b></tr><tr>'

	infoHtml.append('<b style="font-size:150%">{0}</b><br />'.fmt(artist.name))
	if(artist.image[3]["#text"].length)
	{
		infoHtml.append('<img src="{0}" align="left"/>'.fmt(artist.image[3]["#text"]));
	}
	if(typeof(artist.tags.tag) != "undefined")
	{
		infoHtml.append('<p><b>Tagged as:</b> {0}</p>'.fmt(
					 artist.tags.tag.length ?  map(artist.tags.tag, function(tag){return tag.name;}).join(", ") :
										  artist.tags.tag.name));
	}
	var stats =  '<p><div>{0} plays({1} listeners)</div>'.fmt(
				  formatInteger(artist.stats.playcount, "### ### ### ###"), 
				  formatInteger(artist.stats.listeners, "### ### ### ###"));
	if(artist.stats.userplaycount)
	{
		stats += '<div><small>{0} plays in your library</small></div>'.fmt( 
		    		   formatInteger(artist.stats.userplaycount, "### ### ### ###"));
	}
	stats += '</p>';
     infoHtml.append(stats);
	infoHtml.append('{0}</div>'.fmt(artist.bio.summary));
	
	for(var i = 0, l = artist.similar.artist.length; i < l; i += 1){
		var sa = artist.similar.artist[i];
		similar += '<td><img src="{0}" /><small>{1}</small></td>'
					.fmt(sa.image[1]["#text"].replace("/64/", "/64s/"), sa.name);
	}
	similar += "</tr></table></div>";
	infoHtml.append(similar);

	return infoHtml.html();
}

function userJSONToHtml(user)
{
	var infoHtml = $("<div />");
	var info = [];
	var xhr = new XMLHttpRequest();
	var table = "<table><tr><td>";

	console.log(user);	
	infoHtml.append('<b style="font-size:150%">{0}</b><br />'.fmt(user.name))
	if(user.image.length)
	{
			table += '<img src="{0}"/></td><td>'.fmt(user.image[2]["#text"]);		
	}
	
	if(user.realname.length)
	{
		info.push("<b>" + user.realname + "</b>");
	}

	if(user.age.length)
	{
		info.push(user.age);
	}

	if(user.country.length)
	{
		info.push(countryNameByCode(user.country));
	}

	if(user.gender != "n")
	{
		info.push(user.gender == "m" ? "Male" : "Female");
	}

	table += "<p>{0}</p>".fmt(info.join(", "));
	table += "<p>{0} plays</p>".fmt(user.playcount);

	xhr.open("GET", encodeURI("http://www.last.fm/user/{0}/tasteomatic".fmt(user.name)), false);
	xhr.send();
	
	if(xhr.status == 200)
	{
		table +=xhr.responseText;
	}
	table += "</td></tr></table>";
	infoHtml.append(table);

	return infoHtml.html();
}

function getArtistInfo(artist_, el)
{
	var port = chrome.extension.connect({name : "artist.getinfo"})
	port.onMessage.addListener(function(data){
		console.log(data);
		artistMap[artist_] = artistJSONToHtml(data.artist);
		$("div#tooltip > div").html(artistMap[artist_]);
	});
	console.log(artist_);
	port.postMessage({artist: artist_, username: currentUser})
}
function getUserInfo(username, el)
{
	var port = chrome.extension.connect({name : "user.getinfo"});
		port.onMessage.addListener(function(data){
			userMap[username] = userJSONToHtml(data.user);
			$("div#tooltip > div").html(userMap[username]);
	});
	port.postMessage({user: username})
}

var currentUser = $('a#idBadgerUser').text();

$(document).ready(function () {
	if(window.location.hostname !== "funkysouls.com"){ 
		$('a[href*="\\/music\\/"]')
			.filter(function(i){ return this.href.match("http://www.last.fm/music/[^/]*$"); })
			.tooltip({
				bodyHandler: function() {
					var artist = $(this).attr("href").replace(/(http)?.*music\//, "");	

					if(!artistMap[artist])
					{
						getArtistInfo(artist, $(this));
						return '<b> Loading... <b>';
					}
					else
					{
						return artistMap[artist];	
					}
				},
				showURL: false,
			});
		$('a[href*="\\/user\\/"]')
			.filter(function(i){ return this.href.match("http://www.last.fm/user/[^/]*$"); })
			.tooltip({
				bodyHandler: function() {
					var user = $(this).attr("href").replace(/(http)?.*user\//, "")
					
					if(!userMap[user])
					{
						getUserInfo(user, $(this));
						return '<b> Loading... <b>';
					}
					else
					{
						return userMap[user];
					}
				},
				showURL: false,
		});
	} else {
		$('div.txt a')
			.filter(function(){ return this.href.indexOf("/2/") !== -1; })
			.tooltip({
					bodyHandler: function() {
						var artist = $(this).text().split(" - ")[0];

						artist = encodeURI(artist);
						if(!artistMap[artist])
						{
							getArtistInfo(artist, $(this));
							return '<b> Loading... <b>';
						}
						else
						{
							return artistMap[artist];	
						}			
					},
					showURL: false
			});
	}
});

