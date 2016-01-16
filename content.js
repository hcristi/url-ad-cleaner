var count = 0;
var regList = [
    {
        href: 'http://sh',
        pattern: "http:\/\/sh.st\/.*(http:.*)"
    },
	{
		href: 'http://adf',
		pattern: "http:\/\/adf.ly\/.*(http:.*)"
	},
	{
		href: 'https://www.spaste',
		pattern: "https:\/\/www.spaste.com\/.*(http:.*)"
	}
];

for (var i = 0; i < regList.length; i++) {
    var regex = null;
    $('a[href^="' + regList[i].href + '"]').each(function () {
        if (regex == null) {
            regex = new RegExp(regList[i].pattern);
        }
        var matches = regex.exec($(this).attr('href'));
        if (matches.length > 1) {
            count++;
            $(this).attr('href', matches[1]);
        }
    });
}
