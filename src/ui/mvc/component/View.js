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

    /**
     * 최상위 View
     * @constructor
     */
    OTW.ui.view.View = function View(opt) {
        log.printDbg('called View() - opt : ' + opt);
        opt = opt || {};
        // view root element
        this.element = null;
        // view name
        this.name = this.constructor.name;
        // view id
        this.id = this.name + '-' + new Date().getTime();
        // focus flag
        this.isFocus = opt.focus || this.isFocus;
        // select flag
        this.isSelect = opt.select || this.isSelect;
    };
    var proto = OTW.ui.view.View.prototype;

    proto.create = function () {
        log.printDbg('called create()');
        var focusAttr = this.isFocus ? 'focus' : 'un-focus';
        var selectAttr = this.isSelect ? 'select' : 'un-select';
        var elementStr = '<div class="' + this.name + ' ' + focusAttr + ' ' + selectAttr + '" id="' + this.id + '"></div>';
        this.element = $(elementStr);
    };

    proto.show = function () {
        if (this.element) {
            this.element.show();
        }
    };

    proto.hide = function () {
        if (this.element) {
            this.element.hide();
        }
    };

    proto.destory = function () {
        this.element = null;
    };

    proto.setFocus = function (isFocus) {
        if (isFocus) {
            this.element.removeClass('un-focus');
            this.element.addClass('focus');
        } else {
            this.element.removeClass('focus');
            this.element.addClass('un-focus');
        }
        this.isFocus = isFocus;
    };

    proto.getFocus = function () {
        return this.isFocus;
    };

    proto.setSelect = function (isSelect) {
        if (isSelect) {
            this.element.removeClass('un-select');
            this.element.addClass('select');
        } else {
            this.element.removeClass('select');
            this.element.addClass('un-select');
        }
        this.isSelect = isSelect;
    };

    /**
     * View element 를 반환한다.
     *
     * @returns {object} view element object
     */
    proto.getView = function () {
        return this.element;
    };

})();