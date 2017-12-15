/**
 * @fileoverview
 * @author hw.boo on 2017-06-29.
 * @version
 * <p>Copyright (c) 1997-2015 Alticast, Inc. All rights reserved.
 */
OTW.utils.util = (function () {
    // function _makeElement(tag, id, css_class, style, div, src, text, input_type, input_max_length) {
    //     var attrs = {
    //         "id":id, "class":css_class, "src":src, "style":style,
    //         "type":input_type, "maxlength":input_max_length};
    //
    //     var element = $(document.createElement(tag.replace(/<|>/g, ""))).attr(attrs);
    //
    //     if (text !== undefined && text !== null) {
    //         element.html(text);
    //     }
    //
    //     if (div !== undefined && div !== null) {
    //         div.append(element);
    //     }
    //
    //     return element;
    // }

    function _makeElement(options) {
        var element = $(options.tag, options.attrs);

        if (options.text !== undefined && options.text !== null) {
            element.html(options.text);
        }

        if (options.parent !== undefined && options.parent !== null) {
            options.parent.append(element);
        }

        return element;
    }

    return {
        makeElement: _makeElement,
    }
}());