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
 * @author hw.boo on 2017-12-08.
 * @varsion
 * @returns
 */
(function () {
    var log = OTW.utils.Log;
    OTW.ui.view.ListView = function ListView(opt) {
        OTW.ui.view.View.call(this, opt);
    };
    OTW.ui.view.ListView.prototype = new OTW.ui.view.View();
    OTW.ui.view.ListView.prototype.constructor = OTW.ui.view.ListView;
    var proto = OTW.ui.view.ListView.prototype;
    var parents = OTW.ui.view.View.prototype;

    proto.updateList = function (data) {
    };

    proto.updateFocus = function (newIndex, oldIndex) {
    };
})();