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
OTW.managers.MenuDataManager = (function () {
    var testMenu = [
        {name: '메뉴1'},
        {name: '메뉴2'},
        {name: '메뉴3'},
    ];

    function _getMenuList() {
        return testMenu;
    }

    return {
        getMenuList: _getMenuList,
    };
}());
 