var OTW = OTW || {};
OTW.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = OTW;

    // we want to be able to include or exclude the root namespace
    // So we strip it if it's in the namespace
    if (nsparts[0] === "OTW") {
        nsparts = nsparts.slice(1);
    }

    // loop through the parts and create
    // a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has
        // the namespace declared, if not create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element
        // in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now completely constructed
    // with empty namespaces and can be used.
    return parent;
};
OTW.createNS("OTW.managers");
OTW.createNS("OTW.utils");
OTW.createNS("OTW.utils.log");
OTW.createNS("OTW.ui");
OTW.createNS("OTW.ui.layer");
OTW.createNS("OTW.ui.view");
OTW.createNS("OTW.ui.controller");

$(document).ready(function () {
    // init();
});

function init() {
    // OTW.managers.LayerManager.init();
    // OTW.managers.DataManager.init();
}