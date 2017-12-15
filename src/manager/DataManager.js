/**
 * @fileoverview
 * @author hw.boo on 2017-06-30.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.managers.DataManager = (function () {
    var log = OTW.utils.Log;
    var posterListData = null;

    function _init() {
        log.printDbg("init()");
        $.getJSON('../test/posterList.json', function (data) {
            posterListData = data;
        });
    };

    function _getPosterList() {
        return posterListData;
    };

    return {
        init: _init,
        getPosterList: _getPosterList,
    }
}());