function List(list) {
    list = (typeof list === 'undefined') ? {} : list;
    var _self = this;

    _self.id = list.id || "";
    _self.createdAt = list.createdAt || "";
    _self.updatedAt = list.updatedAt || "";
    _self.name = list.name || "";
    _self.description = list.description || "";
    _self.listItems = list.listItems || [];


    //= private methods
    var _addItem = function (item) {
        item.orderNum = _self.getNextOrderNum();
        _self.listItems.push(item);
    };

    var _getItemByOrderNum = function (orderNum) {
        var items = _self.listItems;
        for (var i = 0, l = items.length; i < l; i++) {
            if (items[i].orderNum === orderNum) {
                return items[i];
            }
        }

        return null;
    };

    var _getNextOrderNum = function () {
        var items = _self.listItems;

        var orderNum = 0;
        if (items.length) {
            orderNum = Math.max.apply(Math, items.map(function (o) {
                return o.orderNum;
            }));
        }

        return orderNum + 1;
    };

    var _swapItems = function (item, swapWith) {
        var otherItemOrderNum = swapWith.orderNum;
        swapWith.orderNum = item.orderNum;
        item.orderNum = otherItemOrderNum;
    };

    var _moveUp = function (item) {
        var otherItem = _getItemByOrderNum(item.orderNum - 1);
        if (otherItem) {
            _swapItems(item, otherItem);
        }
    };

    var _moveDown = function (item) {
        var otherItem = _getItemByOrderNum(item.orderNum + 1);
        if (otherItem) {
            _swapItems(item, otherItem);
        }
    };

    //= methods
    _self.addItem = _addItem;
    _self.getItemByOrderNum = _getItemByOrderNum;
    _self.moveUp = _moveUp;
    _self.moveDown = _moveDown;
    _self.getNextOrderNum = _getNextOrderNum;

}
