
var globalMM = Cc["@mozilla.org/globalmessagemanager;1"]
	.getService(Ci.nsIMessageListenerManager);

// load cloud-to-butt into the content process
globalMM.loadFrameScript("chrome://cloud-to-butt/content/cloud-to-butt.js", true);
