/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.model.ListDataModel = function () {
    var logTag = "ListDataModel";
    var listData = {
        totalPage: 0,
        items: [],
    };

    this.init = function () {
        console.log(logTag, "init");
        listData = {
            totalPage: 3,
            items: _getTestData(0),
        };
    };

    this.getData = function () {
        return listData;
    };

    this.loadListData = function (page) {
        listData.items = _getTestData(page);
    };

    function _getTestData(page) {
        var res = null;
        if (page === 0) {
            res = ["0", "1", "2", "3", "4", "5"];
        } else if (page === 1) {
            res = ["6", "7", "8", "9", "10", "11"];
        } else if (page === 2) {
            res = ["6", "7", "8", "9", "10", "11"];
        } else if (page === 3) {
            res = ["12", "13", "14", "15", "16"];
        }
        return res;
    }

};