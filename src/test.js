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
 * @author hw.boo on 2017-12-15.
 * @varsion
 * @returns
 */
describe('test1', function () {
    var view = null;
    beforeEach(function () {
        view = new OTW.ui.view.View();
    });

    it('test1-1', function () {
        spyOn(view, 'getTemplate');

        view.createTemplate({
            content: 'content-test',
        });
        expect(view.getTemplate).toHaveBeenCalled();
    });


});