/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.control.ListControl = function () {
    var logTag = "ListControl";
    var listData = null;
    var navData = null;
    var listDataModel = null;

    this.init = function (view, navModel, dataModel) {
        log.printDbg("init()");
        listDataModel = dataModel;
        listData = dataModel.getData();
        navData = navModel.getData();
    };

    this.handleKeyEvent = function (key_code) {
        console.log(logTag, "handleKeyEvent() - key_code : " + key_code);
        var consume = false;
        if (key_code === 40) { //down
            consume = _keyDown();
        } else if (key_code === 38) { //up
            consume = _keyUp();
        }
        return consume;
    }

    function _keyDown() {
        if (navData.focusedIndex === listData.items.length - 1) {
            if (navData.curPage === listData.totalPage) {
                navData.curPage = 0;
            } else {
                navData.curPage++;
            }
            listDataModel.loadListData(navData.curPage);
            navData.focusedIndex = 0;
        } else {
            navData.focusedIndex++;
        }
        return true;
    }

    function _keyUp() {
        if (navData.focusedIndex === 0) {
            if (navData.curPage === 0) {
                navData.curPage = listData.totalPage;
            } else {
                navData.curPage--;
            }
            listDataModel.loadListData(navData.curPage);
            navData.focusedIndex = listData.items.length - 1;
        } else {
            navData.focusedIndex--;
        }
        return true;
    }
};