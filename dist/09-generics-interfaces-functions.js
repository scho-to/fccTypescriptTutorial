//const searchStr = "foo";
//const hasSearchedString = any<string>((el: string) => el.contains(searchStr),["foo", "bar", "baz"])
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user09 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user09_2 = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: null
};
var result = addId(user09);
console.log(result);
