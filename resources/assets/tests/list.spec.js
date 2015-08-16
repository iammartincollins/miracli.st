describe('List', function () {

    //beforeEach(function() {
    //    var _list = new List();
    //});

    describe('When adding a listItem to the list', function() {

        it('it should increase the listItems', function () {
            var _list = new List();
            var item = new ListItem();
            _list.addNewItem(item);
            expect(_list.listItems.length).toBe(1);
        });

        it('it should set order number correctly', function () {
            var _list = new List();
            var item1 = new ListItem();
            var item2 = new ListItem();
            var item3 = new ListItem();
            _list.addNewItem(item1);
            _list.addNewItem(item2);
            _list.addNewItem(item3);
            expect(_list.listItems[2].orderNum).toBe(3);
        });

    });

    describe('When removing a listItem from the list', function() {

        it('it should decrease the listItems', function () {
            var _list = new List();
            var _item = new ListItem();
            _list.addNewItem(_item);
            _list.deleteItem(_item);
            expect(_list.listItems.length).toBe(0);
        });

        it('it adjust listItem order numbers correctly', function () {
            var _list = new List();
            var _item1 = new ListItem();
            var _item2 = new ListItem();
            var _item3 = new ListItem();
            _list.addNewItem(_item1);
            _list.addNewItem(_item2);
            _list.addNewItem(_item3);
            _list.deleteItem(_list.listItems[1]);
            expect(_list.listItems[1].orderNum).toBe(2);
        });

    });

    describe('When reordering listItems', function() {
        it('it should correctly swap order numbers', function() {
            var _list = new List();
            var _item1 = new ListItem();
            var _item2 = new ListItem();
            var _item3 = new ListItem();
            _list.addNewItem(_item1);
            _list.addNewItem(_item2);
            _list.addNewItem(_item3);
            _list.moveUp(_list.listItems[0]);
            expect(_list.listItems[0].orderNum).toBe(2);
        });
    });
});