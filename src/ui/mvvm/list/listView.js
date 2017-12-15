/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.view.ListView = function (layer) {
    var logTag = "ListView";
    var util = OTW.utils.util;
    var parent = layer;
    var curPageDiv = null;
    var listDivs = [];
    var pagePerItem = 0;

    this.init = function (navData, listData) {
        console.log(logTag, "init");
        // data bind
        Object.observe(navData, _notifyNavChange);
        Object.observe(listData, _notifyDataChange);
        pagePerItem = navData.pagePerItem;
        // tag init
        _updatePage(navData.curPage);
        _updateList(listData.items);
        _updateFocusedIndex(navData.focusedIndex, 0);
    };

    function _notifyDataChange(data) {
        data.forEach(function (change) {
            console.log(change);
            var name = change.name;
            var newValue = change.object[name];
            switch (name) {
                case "items" :
                    _updateList(newValue);
                    break;
            }
        });
    }

    function _notifyNavChange(data) {
        data.forEach(function (change) {
            console.log(change);
            var name = change.name;
            var newValue = change.object[name];
            var oldValue = change.oldValue;
            switch (name) {
                case "curPage" :
                    _updatePage(newValue);
                    break;
                case "focusedIndex" :
                    _updateFocusedIndex(newValue, oldValue);
                    break;
            }
        });
    }

    function _updateFocusedIndex(curFocus, preFocus) {
        console.log(logTag, "_updateFocusedIndex() - curFocus : " + curFocus + ", preFocus : " + preFocus);
        if (!listDivs || !listDivs[curFocus]) {
            return;
        }
        listDivs[preFocus].css('background-color', '');
        listDivs[curFocus].css('background-color', 'red');
    }

    function _updatePage(curPage) {
        var txt = "curPage : " + curPage;
        if (!curPageDiv) {
            curPageDiv = util.makeElement({
                tag: "<div>",
                parent: parent
            });
        }
        curPageDiv.text(txt);
    }

    function _updateList(items) {
        console.log(logTag, "_updateList() - items : " + items);
        if (!items) {
            return;
        }
        for (var i = 0; i < pagePerItem; i++) {
            if (!listDivs[i]) {
                var listDiv = util.makeElement({
                    tag: "<div>",
                    parent: parent
                });
                listDivs.push(listDiv);
            }
            if (i < items.length) {
                listDivs[i].text(items[i]);
            } else {
                listDivs[i].text(' ');
            }
        }
    }
};