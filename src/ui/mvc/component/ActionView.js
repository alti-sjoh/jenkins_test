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
    var log = OTW.utils.Log;

    /**
     * Action View
     * @constructor
     */
    OTW.ui.view.ActionView = function ActionView(opt) {
        OTW.ui.view.View.call(this);
        opt = opt || {};
        this.controller = opt.controller || null;
        if (this.controller) {
            this.controller.setView(this);
        }
    };
    OTW.ui.view.ActionView.prototype = new OTW.ui.view.View();
    OTW.ui.view.ActionView.prototype.constructor = OTW.ui.view.ActionView;
    var proto = OTW.ui.view.ActionView.prototype;
    var parents = OTW.ui.view.View.prototype;

    proto.create = function (opt) {
        parents.create.call(this, opt);
        if (this.controller) {
            this.controller.create();
        }
    };

    proto.setController = function (controller) {

    };

    proto.handleKeyEvent = function (keyCode) {
        if (this.controller) {
            this.controller.handleKeyEvent(keyCode);
        }
    };
})();