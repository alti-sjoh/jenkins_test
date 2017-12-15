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
    var menuDataManager = OTW.managers.MenuDataManager;
    var PAGE_PER_ITEM = 8;

    OTW.ui.controller.ListController = function () {
        this.data = menuDataManager.getMenuList();
        this.listItems = [];
        this.focusedIndex = 0;
        this.curPage = 0;
        this.totalPage = 0;
        this.total = this.data.length;
        this.totalPage = parseInt(this.total / PAGE_PER_ITEM);
    };

    OTW.ui.controller.ListController.prototype = new OTW.ui.controller.Controller();
    OTW.ui.controller.ListController.prototype.constructor = OTW.ui.controller.ListController;
    var proto = OTW.ui.controller.ListController.prototype;
    var parents = OTW.ui.controller.Controller.prototype;

    proto.create = function (opt) {
        parents.create.call(this, opt);
        this.data = menuDataManager.getMenuList();
        this.view.create(this.listItems);
    };

    proto.handleKeyEvent = function (keyCode) {
        log.printDbg('called handleKeyEvent() - keyCode : ' + keyCode);
        if (keyCode === 40) {// down
            var oldFocus = this.focusedIndex;
            var newFocus = this.focusedIndex++;
        } else if (keyCode === 38) { //up

        }
        this.view.updateFocus(newFocus, oldFocus);

    };

    proto.getView = function () {
    };

})();