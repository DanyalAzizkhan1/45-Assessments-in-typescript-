var guestList = ["Usaman", "Ubaid", "Liquat", "Danyal"];
console.log("Great news! we found a bigger table");
guestList.unshift("Sameer");
guestList.splice(Math.floor(guestList.length / 2), 0, "Anas");
guestList.push("cheetah");
console.log(guestList);
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cordially invited to dinner "));
});
