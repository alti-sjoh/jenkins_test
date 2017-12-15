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
 * @author hw.boo on 2017-12-12.
 * @varsion
 * @returns
 */
(function () {
    /**
     * 최상위 Controller
     * @constructor
     */
    OTW.ui.controller.Controller = function () {
        this.view = null;
        this.isFocus = false;
    };
    var proto = OTW.ui.controller.Controller.prototype;

    proto.create = function (opt) {
    };

    proto.setView = function (view) {
        this.view = view;
    };

    proto.setFocus = function (isFocus) {
        this.isFocus = isFocus;
    };

    proto.getFocus = function () {
        return this.isFocus;
    };

    proto.handleKeyEvent = function (keyCode) {
    };

})();
 