function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
    var url = getDomainFromUrl(tab.url).toLowerCase();
    
	//if(url=="www.cnblogs.com"){
		chrome.pageAction.show(tabId);
	//}
    if(url=="www.google.com"){
        console.log("谷歌，我来了");
    }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
