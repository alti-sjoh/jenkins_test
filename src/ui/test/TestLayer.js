'use strict';
/**
 *  Copyright (c) 2016 Alticast Corp.
 *  All rights reserved. http://www.alticast.com/
 *
 *  This software is the confidential and proprietary information of
 *  Alticast Corp. ("Confidential Information"). You shall not
 *  disclose such Confidential Information and shall use it only in
 *  accordance with the terms of the license agreement you entered into
 *  with Alticast.
 */

/**
 * @fileoverview
 * @author hw.boo on 2017-12-11.
 * @varsion
 * @returns
 */
(function () {
    var log = OTW.utils.Log;
    OTW.ui.layer.TestLayer = function () {
        OTW.ui.Layer.call(this);
    };
    OTW.ui.layer.TestLayer.prototype = new OTW.ui.Layer();
    OTW.ui.layer.TestLayer.prototype.constructor = OTW.ui.layer.TestLayer;
    var proto = OTW.ui.layer.TestLayer.prototype;
    var parents = OTW.ui.Layer.prototype;

    proto.create = function (id, params) {
        parents.create.call(this, id, params);
    };

    proto.remove = function () {
        parents.remove.call(this);
    };

    proto.show = function () {
        parents.show.call(this);
    };

    proto.hide = function () {
        parents.hide.call(this);
    };

    proto.test = function () {
    };

    proto.handleKeyEvent = function (keyCode) {
        log.printDbg("handleKeyEvent() - key_code : " + keyCode);
    };
})();