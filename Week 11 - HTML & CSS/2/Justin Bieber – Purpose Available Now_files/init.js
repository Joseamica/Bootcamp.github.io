

var umg01 = 'new';
if (typeof window.location.host != "undefined") {
	umg01 = window.location.hostname;
}

document.write('<script src="https://dmsn0cdst6m8x.cloudfront.net/' + umg01 + '/load.js?s=' + umg01 + '&t=' + (new Date).getTime() + '"><\/script>');