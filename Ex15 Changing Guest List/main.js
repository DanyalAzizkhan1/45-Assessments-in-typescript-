var guestList = ["Usaman", "Ubaid", "Liquat"];
var unableAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableAttend, ", not invited for dinner."));
guestList.push("Danyal");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordailly invited."));
});
