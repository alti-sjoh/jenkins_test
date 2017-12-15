/**
 * @fileoverview
 * @author hw.boo on 2017-06-30.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.model.ListNavModel = function () {
    var logTag = "ListDataModel";
    var navData = {
        pagePerItem: -1,
        focusedIndex: -1,
        curPage: -1,
    };

    this.init = function (pagePerItem, focusedIndex, curPage) {
        navData.pagePerItem = pagePerItem;
        navData.focusedIndex = focusedIndex;
        navData.curPage = curPage;
    };

    this.getData = function () {
        return navData;
    };

    this.setCurPage = function (curPage) {
        navData.curPage = curPage;
    };

    this.setFocusedIndex = function (focusedIndex) {
        navData.focusedIndex = focusedIndex;
    };
};