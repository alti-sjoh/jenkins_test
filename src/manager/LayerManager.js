/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.managers.LayerManager = (function () {
    var log = OTW.utils.Log;
    var layerArr = null;
    var layerDiv = null;

    function _init() {
        log.printDbg("init()");
        layerArr = [];
        $("body").on("keydown", _handleKeyEvent);
    }

    function _activateLayer(id, params) {
        var layer = _getLayer(id);
        if (layer === null) {
            layer = _createLayer(id, params);
        }
        if (layer === null) {
            return;
        }
        layer.show();
    }

    function _deactivateLayer() {
    }

    function _handleKeyEvent(event) {
        for (var i = 0; i < layerArr.length; i++) {
            layerArr[i].handleKeyEvent(event.keyCode);
        }
    }

    function _createLayer(id, params) {
        var layer = null;
        switch (id) {
            case "MVVM" :
                layer = new OTW.ui.layer.MVVMLayer();
                break;
            case "TEST" :
                layer = new OTW.ui.layer.TestLayer();
                break;
            default :
        }
        if (layer !== null) {
            if (!layerDiv) {
                layerDiv = $("#layer_area");
            }
            layer.create(id, params);
            layerArr.push(layer);
            layer.div.appendTo(layerDiv);
        }
        return layer;
    }

    function _getLayer(id) {
        var layer = null, temp_layer = null;
        var length = layerArr.length;
        for (var i = 0; i < length; i++) {
            temp_layer = layerArr[i];
            if (temp_layer.id === id) {
                layer = temp_layer;
                break;
            }
        }
        return layer;
    }

    return {
        init: _init,
        activateLayer: _activateLayer,
        deactivateLayer: _deactivateLayer,
    };
}());