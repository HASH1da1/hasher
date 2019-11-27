// create contextmenus
browser.contextMenus.create({
    id: "VT",
    title:"VirusTotal",
    contexts:["selection"],
    icons:{
        "16":"icon/virustotal.png"
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
        "16":"icon/xforce.png"
    }
});

browser.contextMenus.create({
    id:"jotti",
    title: "Jotti.org",
    contexts: ["selection"],
    icons:{
        "16":"icon/jotti.png"
    }
});

browser.contextMenus.create({
    id:"avcaesar",
    title:"AVcaesar",
    contexts:["selection"],
    icons:{
        "16":"icon/avcaesar.png"
    }
});

browser.contextMenus.create({
    id:"hashdd",
    title:"hashdd",
    contexts:["selection"],
    icons:{
        "16":"icon/hashdd.png"
    }
});

// create empty variables
var artifact;

// selection text sanitize function below
browser.contextMenus.onClicked.addListener((info, tab) => {
    // strip leading and trailing spaces
    if (info.selectionText) {
        artifact = String(info.selectionText).trim();
    } else if (info.linkUrl) {
        var link = new URL(info.linkUrl);
        artifact = link;
    };

    switch(info.menuItemId){
        case "VT":
            url = "https://www.virustotal.com/gui/file/"+artifact+"/detection";
            break;

        case "joesandbox":
            url = "https://www.joesandbox.com/search?q="+artifact;
            break;

        case "hybridanalysis":
            url = "https://www.hybrid-analysis.com/sample/"+artifact;
            break;

        case "alienvault":
            url = "https://otx.alienvault.com/indicator/file/"+artifact;
            break;

        case "malshare":
            url = "https://www.malshare.com/sample.php?action=detail&hash="+artifact;
            break;

        case "ibmexchange":
            url = "https://exchange.xforce.ibmcloud.com/malware/"+artifact;
            break;

        case "jotti":
            url = "https://virusscan.jotti.org/en-US/search/hash/"+artifact;
            break;

        case "avcaesar":
            url = "https://avcaesar.malware.lu/sample/"+artifact;
            break;
        
        case "hashdd":
            url = "https://hashdd.com/i/"+artifact;
            break;
    }
    browser.tabs.create({url: url});
    navigator.clipboard.writeText(artifact);
    });
