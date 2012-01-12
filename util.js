String.prototype.fmt = function() {
	var txt = this;
	for (var i = 0; i < arguments.length; i++) {
		var exp = new RegExp('\\{' + (i) + '\\}', 'gm');
		txt = txt.replace(exp, arguments[i]);
	}
	return txt;
};

function formatInteger(integer, pattern) {
	var result = '';

	integerIndex = integer.length - 1;
	patternIndex = pattern.length - 1;

	while ((integerIndex >= 0) && (patternIndex >= 0)) {
		var digit = integer.charAt(integerIndex);
		integerIndex--;

		// Skip non-digits from the source integer (eradicate current formatting).
		if ((digit < '0') || (digit > '9')) continue;

		// Got a digit from the integer, now plug it into the pattern.
		while (patternIndex >= 0) {
			var patternChar = pattern.charAt(patternIndex);
			patternIndex--;

			// Substitute digits for '#' chars, treat other chars literally.
			if (patternChar == '#') {
				result = digit + result;
				break;
			}
			else {
				result = patternChar + result;
			}
		}
	}

	return result;
}

function map(arr, fn) {
	var r = [];
	var l = arr.length;

	for (i = 0; i < l; i++) {
		r.push(fn(arr[i]));
	}
	return r;
}

function countryNameByCode(code) {
	if (code == "AF") return "Afghanistan";
	else if (code == "AX") return "Aland Islands";
	else if (code == "AL") return "Albania";
	else if (code == "DZ") return "Algeria";
	else if (code == "AS") return "American Samoa";
	else if (code == "AD") return "Andorra";
	else if (code == "AO") return "Angola";
	else if (code == "AI") return "Anguilla";
	else if (code == "AQ") return "Antarctica";
	else if (code == "AG") return "Antigua and Barbuda";
	else if (code == "AR") return "Argentina";
	else if (code == "AM") return "Armenia";
	else if (code == "AW") return "Aruba";
	else if (code == "AU") return "Australia";
	else if (code == "AT") return "Austria";
	else if (code == "AZ") return "Azerbaijan";
	else if (code == "BS") return "Bahamas";
	else if (code == "BH") return "Bahrain";
	else if (code == "BD") return "Bangladesh";
	else if (code == "BB") return "Barbados";
	else if (code == "BY") return "Belarus";
	else if (code == "BE") return "Belgium";
	else if (code == "BZ") return "Belize";
	else if (code == "BJ") return "Benin";
	else if (code == "BM") return "Bermuda";
	else if (code == "BT") return "Bhutan";
	else if (code == "BO") return "Bolivia";
	else if (code == "BA") return "Bosnia and Herzegovina";
	else if (code == "BW") return "Botswana";
	else if (code == "BV") return "Bouvet Island";
	else if (code == "BR") return "Brazil";
	else if (code == "IO") return "British Indian Ocean Territory";
	else if (code == "BN") return "Brunei Darussalam";
	else if (code == "BG") return "Bulgaria";
	else if (code == "BF") return "Burkina Faso";
	else if (code == "BI") return "Burundi";
	else if (code == "KH") return "Cambodia";
	else if (code == "CM") return "Cameroon";
	else if (code == "CA") return "Canada";
	else if (code == "CV") return "Cape Verde";
	else if (code == "KY") return "Cayman Islands";
	else if (code == "CF") return "Central African Republic";
	else if (code == "TD") return "Chad";
	else if (code == "CL") return "Chile";
	else if (code == "CN") return "China, mainland";
	else if (code == "CX") return "Christmas Island";
	else if (code == "CC") return "Cocos (Keeling) Islands";
	else if (code == "CO") return "Colombia";
	else if (code == "KM") return "Comoros";
	else if (code == "CG") return "Congo, Republic of the ";
	else if (code == "CD") return "Congo, The Democratic Republic Of The";
	else if (code == "CK") return "Cook Islands";
	else if (code == "CR") return "Costa Rica";
	else if (code == "CI") return "Cote d''Ivoire";
	else if (code == "HR") return "Croatia";
	else if (code == "CU") return "Cuba";
	else if (code == "CY") return "Cyprus";
	else if (code == "CZ") return "Czech Republic";
	else if (code == "DK") return "Denmark";
	else if (code == "DJ") return "Djibouti";
	else if (code == "DM") return "Dominica";
	else if (code == "DO") return "Dominican Republic";
	else if (code == "EC") return "Ecuador";
	else if (code == "EG") return "Egypt";
	else if (code == "SV") return "El Salvador";
	else if (code == "GQ") return "Equatorial Guinea";
	else if (code == "ER") return "Eritrea";
	else if (code == "EE") return "Estonia";
	else if (code == "ET") return "Ethiopia";
	else if (code == "EU") return "European Union";
	else if (code == "FK") return "Falkland Islands";
	else if (code == "FO") return "Faroe Islands";
	else if (code == "FJ") return "Fiji";
	else if (code == "FI") return "Finland";
	else if (code == "FR") return "France";
	else if (code == "GF") return "French Guiana";
	else if (code == "PF") return "French Polynesia";
	else if (code == "TF") return "French Southern Territories";
	else if (code == "GA") return "Gabon";
	else if (code == "GM") return "Gambia";
	else if (code == "GE") return "Georgia";
	else if (code == "DE") return "Germany";
	else if (code == "GH") return "Ghana";
	else if (code == "GI") return "Gibraltar";
	else if (code == "GR") return "Greece";
	else if (code == "GL") return "Greenland";
	else if (code == "GD") return "Grenada";
	else if (code == "GP") return "Guadeloupe";
	else if (code == "GU") return "Guam";
	else if (code == "GT") return "Guatemala";
	else if (code == "GN") return "Guinea";
	else if (code == "GW") return "Guinea-Bissau";
	else if (code == "GY") return "Guyana";
	else if (code == "HT") return "Haiti";
	else if (code == "HM") return "Heard Island and McDonald Islands";
	else if (code == "VA") return "Vatican City State";
	else if (code == "HN") return "Honduras";
	else if (code == "HK") return "Hong Kong";
	else if (code == "HU") return "Hungary";
	else if (code == "IS") return "Iceland";
	else if (code == "IN") return "India";
	else if (code == "ID") return "Indonesia";
	else if (code == "IR") return "Iran, Islamic Republic of";
	else if (code == "IQ") return "Iraq";
	else if (code == "IE") return "Ireland, Republic of";
	else if (code == "IL") return "Israel";
	else if (code == "IT") return "Italy";
	else if (code == "JM") return "Jamaica";
	else if (code == "JP") return "Japan";
	else if (code == "JO") return "Jordan";
	else if (code == "KZ") return "Kazakhstan";
	else if (code == "KE") return "Kenya";
	else if (code == "KI") return "Kiribati";
	else if (code == "KP") return "Korea, Democratic People''s Republic of";
	else if (code == "KR") return "Korea, Republic of";
	else if (code == "KW") return "Kuwait";
	else if (code == "KG") return "Kyrgyzstan";
	else if (code == "LA") return "Lao People''s Democratic Republic";
	else if (code == "LV") return "Latvia";
	else if (code == "LB") return "Lebanon";
	else if (code == "LS") return "Lesotho";
	else if (code == "LR") return "Liberia";
	else if (code == "LY") return "Libyan Arab Jamahiriya";
	else if (code == "LI") return "Liechtenstein";
	else if (code == "LT") return "Lithuania";
	else if (code == "LU") return "Luxembourg";
	else if (code == "MO") return "Macao";
	else if (code == "MK") return "Macedonia, The Former Yugoslav Republic of";
	else if (code == "MG") return "Madagascar";
	else if (code == "MW") return "Malawi";
	else if (code == "MY") return "Malaysia";
	else if (code == "MV") return "Maldives";
	else if (code == "ML") return "Mali";
	else if (code == "MT") return "Malta";
	else if (code == "MH") return "Marshall Islands";
	else if (code == "MQ") return "Martinique";
	else if (code == "MR") return "Mauritania";
	else if (code == "MU") return "Mauritius";
	else if (code == "YT") return "Mayotte";
	else if (code == "MX") return "Mexico";
	else if (code == "FM") return "Micronesia, Federated States of";
	else if (code == "MD") return "Moldova, Republic of";
	else if (code == "MC") return "Monaco";
	else if (code == "MN") return "Mongolia";
	else if (code == "MS") return "Montserrat";
	else if (code == "MA") return "Morocco";
	else if (code == "MZ") return "Mozambique";
	else if (code == "MM") return "Myanmar";
	else if (code == "NA") return "Namibia";
	else if (code == "NR") return "Nauru";
	else if (code == "NP") return "Nepal";
	else if (code == "NL") return "Netherlands";
	else if (code == "AN") return "Netherlands Antilles";
	else if (code == "NC") return "New Caledonia";
	else if (code == "NZ") return "New Zealand";
	else if (code == "NI") return "Nicaragua";
	else if (code == "NE") return "Niger";
	else if (code == "NG") return "Nigeria";
	else if (code == "NU") return "Niue";
	else if (code == "NF") return "Norfolk Island";
	else if (code == "MP") return "Northern Mariana Islands";
	else if (code == "NO") return "Norway";
	else if (code == "OM") return "Oman";
	else if (code == "PK") return "Pakistan";
	else if (code == "PW") return "Palau";
	else if (code == "PS") return "Palestinian Territory, Occupied";
	else if (code == "PA") return "Panama";
	else if (code == "PG") return "Papua New Guinea";
	else if (code == "PY") return "Paraguay";
	else if (code == "PE") return "Peru";
	else if (code == "PH") return "Philippines";
	else if (code == "PN") return "Pitcairn";
	else if (code == "PL") return "Poland";
	else if (code == "PT") return "Portugal";
	else if (code == "PR") return "Puerto Rico";
	else if (code == "QA") return "Qatar";
	else if (code == "RE") return "Reunion";
	else if (code == "RO") return "Romania";
	else if (code == "RU") return "Russian Federation";
	else if (code == "RW") return "Rwanda";
	else if (code == "SH") return "Saint Helena";
	else if (code == "KN") return "Saint Kitts and Nevis";
	else if (code == "LC") return "Saint Lucia";
	else if (code == "PM") return "Saint-Pierre and Miquelon";
	else if (code == "VC") return "Saint Vincent and the Grenadines";
	else if (code == "WS") return "Samoa";
	else if (code == "SM") return "San Marino";
	else if (code == "ST") return "Sao Tome and Principe";
	else if (code == "SA") return "Saudi Arabia";
	else if (code == "SN") return "Senegal";
	else if (code == "CS") return "Serbia and Montenegro";
	else if (code == "SC") return "Seychelles";
	else if (code == "SL") return "Sierra Leone";
	else if (code == "SG") return "Singapore";
	else if (code == "SK") return "Slovakia";
	else if (code == "SI") return "Slovenia";
	else if (code == "SB") return "Solomon Islands";
	else if (code == "SO") return "Somalia";
	else if (code == "ZA") return "South Africa";
	else if (code == "GS") return "South Georgia and the South Sandwich Islands";
	else if (code == "ES") return "Spain";
	else if (code == "LK") return "Sri Lanka";
	else if (code == "SD") return "Sudan";
	else if (code == "SR") return "Suriname";
	else if (code == "SJ") return "Svalbard and Jan Mayen";
	else if (code == "SZ") return "Swaziland";
	else if (code == "SE") return "Sweden";
	else if (code == "CH") return "Switzerland";
	else if (code == "SY") return "Syrian Arab Republic";
	else if (code == "TW") return "Taiwan (Republic of China)";
	else if (code == "TJ") return "Tajikistan";
	else if (code == "TZ") return "Tanzania, United Republic Of";
	else if (code == "TH") return "Thailand";
	else if (code == "TL") return "Timor-Leste";
	else if (code == "TG") return "Togo";
	else if (code == "TK") return "Tokelau";
	else if (code == "TO") return "Tonga";
	else if (code == "TT") return "Trinidad and Tobago";
	else if (code == "TN") return "Tunisia";
	else if (code == "TR") return "Turkey";
	else if (code == "TM") return "Turkmenistan";
	else if (code == "TC") return "Turks and Caicos Islands";
	else if (code == "TV") return "Tuvalu";
	else if (code == "UG") return "Uganda";
	else if (code == "UA") return "Ukraine";
	else if (code == "AE") return "United Arab Emirates";
	else if (code == "GB") return "United Kingdom";
	else if (code == "UK") return "United Kingdom";
	else if (code == "US") return "United States";
	else if (code == "UM") return "United States Minor Outlying Islands";
	else if (code == "UY") return "Uruguay";
	else if (code == "UZ") return "Uzbekistan";
	else if (code == "VU") return "Vanuatu";
	else if (code == "VE") return "Venezuela";
	else if (code == "VN") return "Viet Nam";
	else if (code == "VG") return "Virgin Islands, British";
	else if (code == "VI") return "Virgin Islands, U.S.";
	else if (code == "WF") return "Wallis and Futuna";
	else if (code == "EH") return "Western Sahara";
	else if (code == "YE") return "Yemen";
	else if (code == "ZM") return "Zambia";
	else if (code == "ZW") return "Zimbabwe";
}

