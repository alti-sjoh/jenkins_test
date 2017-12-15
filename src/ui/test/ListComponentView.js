function ListComponentView() {}

ListComponentView.prototype = new ComponentView();
ListComponentView.prototype.constructor = ListComponentView;

ListComponentView.prototype.create = function (param) {
    var view = '';
    var template = this.defaultTemplate;

    this.data   = param.data || [];
    this.row    = param.row     || 1;
    this.column = param.column === 1 && this.row === 1 ? this.data.length : 1;
    this.id     = param.id      || '';
    this.class  = this.row > this.column ? 'vertical' : 'horizontal';
    this.content = '';

    for (var i = 0; i < this.data.length; i ++) {
        // this.content += '<div class="list_item">' + this.data[i] + '</div>';
        this.content += textView[i].getT~();
    }

    template = template.replace('{{id}}', this.id);
    template = template.replace('{{class}}', this.class);
    // template = template.replace('{{content}}', this.content || '');

    view = view + template;


    this.dom = $.parseHTML(view);
    return this.dom;
};

function key() {
    textView[0].update('ttttt');
}

ListComponentView.prototype.setFocus = function (idx) {

};

ListComponentView.prototype.removeItem = function () {

};

ListComponentView.prototype.addItem = function () {

};

ListComponentView.prototype.getItem = function () {

};

ListComponentView.prototype.remove = function () {

};