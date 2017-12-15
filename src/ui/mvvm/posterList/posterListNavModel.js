/**
 * @fileoverview
 * @author hw.boo on 2017-06-30.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.ui.model.PosterListNavModel = function () {
    var data = {
        focusedIndex: -1,
        curPage: -1,
        row: -1,//행(가로)
        col: -1,//열(세로)
    };

    this.init = function (row, col, focusedIndex, curPage) {
        data.row = row;
        data.row = col;
        data.focusedIndex = focusedIndex;
        data.curPage = curPage;
    };

    this.getData = function () {
        return data;
    }
};