"use strict";

OTW.utils.Log = (function () {

    function _getHeader(prefix, e) {
        var header = null;
        var index = -1;
        try {
            if (e === undefined) {
                throw new Error();
            }
        } catch (error) {
            e = error;
            index = 2;
        } finally {
            header = traceCaller(index, e);
        }

        if (header === null || header === undefined) {
            if (prefix === null || prefix === undefined) {
                return "";
            }
            else {
                header = prefix;
            }
        }
        else {
            if (prefix !== null && prefix !== undefined) {
                header = prefix + "-" + header;
            }
        }

        return "[" + header + "]";
    }

    function traceCaller(n, e) {
        if (isNaN(n) || n < 0) {
            n = 0;
        }
        else {
            n = 2;
        }

        var s = e.stack;

        //console.info("traceCaller = " + s + " -- end");

        var a = s.indexOf('\n', 5);
        while (n--) {
            a = s.indexOf('\n', a + 1);
            if (a < 0) {
                a = s.lastIndexOf('\n', s.length);
                break;
            }
        }
        var b = s.indexOf('\n', a + 1);
        if (b < 0) {
            b = s.length;
        }
        a = Math.max(s.lastIndexOf(' ', b), s.lastIndexOf('/', b));
        b = s.lastIndexOf(':', b);
        var c = s.indexOf('?', a + 1);
        var d, e, temp, result;
        if (c >= 0) {
            temp = s.substring(a + 1, c)
            e = temp.indexOf(':');
            if (e < 0) {
                d = s.lastIndexOf(':', b - 1);
                result = s.substring(a + 1, c);
                result += s.substring(d, b);
            }
            else {
                e = temp.indexOf(':', e + 1);
                result = temp.substring(0, e);
            }
        }
        else {
            result = s.substring(a + 1, b);
        }

        return result;
    }

    function _printDbg(msg) {
        console.log(_getHeader() + msg);
    };

    return {
        printDbg: _printDbg,
        printErr: function(msg, header) {
            _printDbg(LEVEL.ERR, msg, header);
        },
        printExec: function(e, header) {
            _printDbg(e, header);
        },
    }
}());