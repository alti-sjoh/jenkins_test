"use strict";

(function () {
    var log = OTW.utils.Log;
    /**
     * Layer object
     *
     * 화면상 그려지는 모든 ui의 div 및 하위 elements를 포함
     * 기본적으로 priority 기반으로 정렬
     */
    OTW.ui.Layer = function (id, params) {

        // id for div tag
        this.id = id;
        // div object for layer
        this.div = null;

        // external parameter
        this.params = params;

        // child view
        this.child = null;

    };

    OTW.ui.Layer.prototype = {
        /**
         * create div of Layer
         */
        create: function (id, params) {
            this.id = id;
            this.params = params;
            if (this.div === null) {
                this.div = OTW.utils.util.makeElement({
                    tag: "<div />",
                    attrs: {
                        id: this.id,
                    },
                });
                log.printDbg("created(" + this.id + ")");
                if (this.child !== null) {
                    this.child.create();
                }

                // child view 에서 parent div를 visible 하게 만들 수 있기 때문에
                // create 시에 가장 마지막에 의도적으로 hidden 처리한다.
                //$("#" + this.id).css("visibility","hidden");
                this.div.css("visibility", "hidden");
            }
        },
        /**
         * remove div of Layer
         */
        remove: function () {
            if (this.div !== null) {
                this.div.remove();

                log.printDbg("removed(" + this.id + ")");

                if (this.child !== null) {
                    this.child.destroy();
                    this.child = null;
                }
            }
        },
        /**
         * change visibility to show Layer
         *
         * 단, prameter는 넘어오지만 처리는 상속 Layer에서 처리하도록 함
         * @params resume - true when layer will show by history back, otherwise false
         * @params stack_size - stack layer size에 따라서 UI 동작이 달라지는 경우 처리를 위한 값
         * @params visible - layer를 create 했지만 실제로 show 처리를 원하지 않는 경우를 위한 값 (miniEPG 등에서 사용)
         */
        show: function () {
            log.printDbg("show(" + this.id + ")");
            $("#" + this.id).css("visibility", "inherit");
        },
        /**
         * change visibility to hide Layer
         *
         * @param id - 특정 메뉴로 jump 할 경우 이동되는 Layer ID
         *                hot key에 의해 특정 메뉴로 이동할 경우
         *                하위 stack layer 중 상태 정리가 필요한 layer에서 해당 항목을 보고 처리한다.
         */
        hide: function () {
            var args = [].slice.call(arguments);
            var id = args[0];

            log.printDbg("hide(" + this.id + ")");

            //this.div.css("visibility","hidden");
            $("#" + this.id).css("visibility", "hidden");
            this.params = null;

            if (this.child !== null) {
                this.child.hide();
            }
        },
        /**
         * return whether or not showing layer
         *
         * @returns {Boolean} if showing return true, otherwise false
         */
        isShowing: function () {
            //return this.div.css("visibility") !== "hidden";
            return $("#" + this.id).css("visibility") !== "hidden";
        },
        /**
         * setting object for external defined parameter
         *
         * ex) menu index value to link specific homemeu
         *
         * @param obj
         */
        setParams: function (params) {
            this.params = params;
        },
        /**
         * return parameter object
         *
         * @returns {Object}
         */
        getParams: function () {
            return this.params;
        },
        /**
         * set child view
         *
         * @param child
         */
        setChild: function (child) {
            this.child = child;
        },
        /**
         * return whether or not cousume key event
         *
         * @param key_code
         * @returns {Boolean} true if consume key event, otherwise false
         */
        handleKeyEvent: function (key_code) {
            // 만약 child view 가 존재하면 해당 view에게 key를 전달
            if (this.child !== null) {
                return this.child.handleKeyEvent(key_code);
            }
            return false;
        },
    };
})();