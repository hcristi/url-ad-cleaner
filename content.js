var count = 0;
var defaultPattern = ".*{0}.*(http:.*)"
var regList = [
    {
        href: 'http://sh',
        // pattern: "http:\/\/sh.st\/.*(http:.*)"
    },
	{
		href: 'http://adf',
		// pattern: "http:\/\/adf.ly\/.*(http:.*)"
	},
	{
		href: 'https://www.spaste',
		// pattern: "https:\/\/www.spaste.com\/.*(http:.*)"
	},
    {
        href: 'http://linkshrink',
        // pattern: "http:\/\/linkshrink.net\/.*(http:.*)"
    },
	{
		href : "http://bc"
	}
];

for (var i = 0; i < regList.length; i++) {
    var pattern = regList[i].pattern || defaultPattern.replace("{0}", regList[i].href);
	var regex = new RegExp(pattern);
	
    $('a[href*="' + regList[i].href + '"]').each(function () {
        var matches = regex.exec($(this).attr('href'));
        if (matches.length > 1) {
            count++;
            $(this).attr('href', matches[1]);
        }
    });
}
