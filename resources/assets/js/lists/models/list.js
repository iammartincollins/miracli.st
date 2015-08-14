function List(list) {
    list = (typeof list === 'undefined') ? {} : list;
    var _self = this;

    this.id = list.id || "";
    this.createdAt = list.createdAt || "";
    this.updatedAt = list.updatedAt || "";
    this.name = list.name || "";
    this.description = list.description || "";
    this.listItems = list.listItems || [];

    //= private methods
    var _addItem = function (item) {
        _self.listItems.push(item);
    };

    var _deleteItem = function (item) {
        var index = _self.listItems.indexOf(item);
        if (index != -1) {
            _self.listItems.splice(index, 1);
        }

        var removedOrderNum = item.orderNum;
        for (var i = 0, l = _self.listItems.length; i < l; i++) {
            var listItem = _self.listItems[i];
            if (listItem.orderNum >= removedOrderNum) {
                listItem.orderNum--;
            }
        }
    };

    var _addNewItem = function (item) {
        item = new ListItem(item);
        item.orderNum = _getNextOrderNum();
        _addItem(item);
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

    //= public methods
    this.addItem = _addItem;
    this.addNewItem = _addNewItem;
    this.deleteItem = _deleteItem;
    this.moveUp = _moveUp;
    this.moveDown = _moveDown;
}
