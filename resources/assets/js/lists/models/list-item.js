function ListItem (item)
{
    item = (typeof item === 'undefined') ? {} : item;
    var _self = this;

    _self.orderNum = item.order_num || 1;
    _self.title = item.title || "";
    _self.body = item.body || "";
}
