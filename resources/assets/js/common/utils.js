var indexOfObjectByProp = function (arr, prop, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(prop) && obj[prop] === arr[i][prop]) {
            return i;
        }
    }
    return -1;
};