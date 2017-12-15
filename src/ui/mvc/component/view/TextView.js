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
 * @fileoverview Text View 정의
 * @author hw.boo on 2017-12-11.
 * @varsion
 * @returns
 */
(function () {
    var log = OTW.utils.Log;

    /**
     * Text View
     * @constructor
     */
    OTW.ui.view.TextView = function TextView(opt) {
        OTW.ui.view.View.call(this, opt);
        opt = opt || {};
        this.contents = opt.contents || '';
    };
    OTW.ui.view.TextView.prototype = new OTW.ui.view.View();
    OTW.ui.view.TextView.prototype.constructor = OTW.ui.view.TextView;
    var proto = OTW.ui.view.TextView.prototype;
    var parents = OTW.ui.view.View.prototype;

    /**
     * Text view element 생성
     *
     * @param {object} opt
     * @return {void}
     */
    proto.create = function (opt) {
        parents.create.call(this, opt);
        opt = opt || {};
        this.contents = opt.contents || this.contents;
        this.element.append(this.contents);
    };

})();
