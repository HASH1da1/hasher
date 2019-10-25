// create contextmenus
browser.contextMenus.create({
    id: "VT",
    title:"VirusTotal",
    contexts:["selection"],
    icons:{
        "16":"icon.vt.png"
    }
});

browser.contextMenus.create({
    id:"joesandbox",
    title:"JoeSandbox",
    contexts:["selection"],
    icons:{
        "16":"icon/joesandbox.png"
    }
});

browser.contextMenus.create({
    id:"hybridanalysis",
    title:"Hybrid Analysis",
    contexts:["selection"],
    icons:{
        "16":"icon/hybridanalysis.png"
    }
});

browser.contextMenus.create({
    id:"alienvault",
    title:"AlienVault OTX",
    contexts:["selection"],
    icons:{
        "16":"icon/alienvault.png"
    }
});

browser.contextMenus.create({
    id:"malshare",
    title:"Malshare",
    contexts:["selection"],
    icons:{
        "16":"icon/malshare.png"
    }
});

browser.contextMenus.create({
    id:"ibmexchange",
    title:"IBM Exchange",
    contexts:["selection"],
    icons:{
        "16":"icon/ibmexchange.png"
    }
});

// create empty variables
var artifact;
var md5;
var sha1;
var sha256;

// selection text sanitize function below