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
 * @author hw.boo on 2017-12-14.
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
        this.element = null;
        this.parent = opt.parent || null;
        this.id = opt.id || '';
        this.name = this.constructor.name ? this.constructor.name + '_' : '';
        this.uuid = this.name + new Date().getTime();
        var classAttr = opt.class || '';
        this.content = '';
        this.template =
            '<div id="' + this.id + '" class="' + classAttr + '" uuid="' + this.uuid + '">' +
            '{{content}}' +
            '</div>';
    };
    var proto = OTW.ui.view.View.prototype;

    proto.create = function (opt) {
        // TODO [hw.boo] content 정의
        this.content = opt.content || '';
        this.template.replace('{{content}}', this.content);
    };

    proto.destroy = function () {
        this.element = undefined;
        this.id = undefined;
        this.uuid = undefined;
        this.content = undefined;
        this.templete = undefined;
    };

    proto.createTemplate = function (opt) {
        this.content = opt.content || '';
        this.template = this.template.replace('{{content}}', this.content);
        return this.template;
    };

    proto.getTemplate = function () {
        return this.template;
    };

    proto.createElement = function (opt) {
        this.element = $(this.createTemplate(opt));
        return this.element;
    };

    proto.getElement = function () {
        if (!this.element) {
            // var selector = this.parent ? '[uuid=' + this.parent.uuid + ']' : '';
            // this.element = document.querySelector(selector + ' [uuid=' + this.uuid + ']');
            var parentElement = this.parent ? this.parent.getElement() : null;
            (parentElement || document).querySelector('[uuid=' + this.uuid + ']');
            if (!this.element) {
                log.printErr('getElement() - Error invalid element');
            }
        }
        return this.element;
    };

})();