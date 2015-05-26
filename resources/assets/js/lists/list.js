function List (list)
{
    list = (typeof list === 'undefined') ? {} : list;
    var _self = this;

    _self.name = list.name || "";
    _self.description = list.description || "";
    _self.listItems = list.listItems || [];

    _self.addItem = function (item) {
        _self.listItems.push(item);
    }
}
