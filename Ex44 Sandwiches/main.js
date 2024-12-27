function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want Sandwich of ".concat(items);
}
;
var collection1 = mySandwiches("Ham", " Cheeze", " Lettuce"); // can add as many you wish
var collection2 = mySandwiches("Turkey", " Swiss");
var collection3 = mySandwiches("Chicken Caesar");
console.log(collection1);
console.log(collection2);
console.log(collection3);
