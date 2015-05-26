function ListItem (item)
{
    item = (typeof item === 'undefined') ? {} : item;
    var _self = this;

    _self.order_num = item.order_num || 1;
    _self.title = item.title || "";
    _self.body = item.body || "";
}
