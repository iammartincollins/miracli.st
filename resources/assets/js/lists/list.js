function List (list)
{
    list = (typeof list === 'undefined') ? {} : list;
    var _self = this;

    _self.id = list.id || "";
    _self.createdAt = list.createdAt || "";
    _self.updatedAt = list.updatedAt || "";
    _self.name = list.name || "";
    _self.description = list.description || "";
    _self.listItems = list.listItems || [];

    _self.addItem = function (item) {
        _self.listItems.push(item);
    }

    _self.getItemByOrderNum = function (orderNum) {
        var items = _self.listItems;

        for (var i = 0, l = items.length; i < l; i++) {
            if (items[i].orderNum === orderNum) {
                return items[i];
            }
        }

        return null;
    }

    _self.getNextOrderNum = function () {
        var items = _self.listItems;
        var max = Math.max.apply(Math, items.map(function(o){
            return o.orderNum;
        }));

        return max + 1;
    }
}
