describe("Utils", function () {

    it("should return the correct index", function () {

        var o1 = { title: "one" };
        var o2 = { title: "two" };
        var o3 = { title: "three" };
        var o4 = { title: "four" };
        var o5 = { title: "five" };
        var o6 = { title: "six" };

        var arr = [o1, o2, o3, o4, o5, o6];
        expect(indexOfObjectByProp(arr, 'title', o4)).toEqual(3);
    });
});