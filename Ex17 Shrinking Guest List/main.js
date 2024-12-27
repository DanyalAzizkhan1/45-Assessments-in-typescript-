var guestList = ["Usaman", "Ubaid", "Liquat", "Danyal"];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guestList.unshift("farooq", "mudaseer");
console.log("upadate list of guest:", guestList);
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("soory, ".concat(removedGuest, ", we cant invite you "));
    }
}
guestList.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you both are invited for the dinner"));
});
guestList.splice(0, guestList.length);
console.log("updated list of guest:", guestList);
