/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.layer.MVVMLayer = function () {
    var logTag = "MVVMLayer";
    var listControl = null;

    this.init = function () {
        console.log(logTag, "init");
        createList(this.div);
        // createPosterList(this.div);
    };

    this.showView = function () {
    };

    this.remove = function () {
    };

    this.hide = function () {
    };

    this.handleKeyEvent = function (key_code) {
        // [hw.boo] 현재 포커스 된 control 에게 키를 넘겨 준다.
        var consume = false;
        if (listControl) {
            consume = listControl.handleKeyEvent(key_code);
        }
        return consume;
    }

    function createPosterList(div) {
    }

    function createList(div) {
        //model
        var listNavModel = new OTW.ui.model.ListNavModel();
        listNavModel.init(6, 0, 0);
        var listDataModel = new OTW.ui.model.ListDataModel();
        listDataModel.init();
        //view
        var listView = new OTW.ui.view.ListView(div);
        listView.init(listNavModel.getData(), listDataModel.getData());
        //control
        listControl = new OTW.ui.control.ListControl();
        listControl.init(listView, listNavModel, listDataModel);
    }
};

OTW.ui.layer.MVVMLayer.prototype = new OTW.ui.Layer();
OTW.ui.layer.MVVMLayer.prototype.constructor = OTW.ui.layer.MVVMLayer;

OTW.ui.layer.MVVMLayer.prototype.create = function (id, params) {
    OTW.ui.Layer.prototype.create.call(this, id, params);
    this.init();
};

OTW.ui.layer.MVVMLayer.prototype.remove = function () {
    OTW.ui.Layer.prototype.remove.call(this);
    this.remove();
};

OTW.ui.layer.MVVMLayer.prototype.show = function () {
    OTW.ui.Layer.prototype.show.call(this);
    this.showView();
};

OTW.ui.layer.MVVMLayer.prototype.hide = function () {
    OTW.ui.Layer.prototype.hide.call(this);
    this.hide();
};

OTW.ui.layer.MVVMLayer.prototype.handleKeyEvent = function (key_code) {
    return this.handleKeyEvent(key_code);
};
