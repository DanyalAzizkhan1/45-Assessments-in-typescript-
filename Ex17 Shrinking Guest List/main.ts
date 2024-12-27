let guestList:string[] = ["Usaman","Ubaid","Liquat", "Danyal"];


console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");

guestList.unshift("farooq", "mudaseer");

console.log("upadate list of guest:", guestList  )

while (guestList.length > 2) {

    let removedGuest :string | undefined = guestList.pop();
if (removedGuest !== undefined) {
    console.log(`soory, ${removedGuest}, we cant invite you `)
    
}
}

guestList.forEach(guest => {
    console.log(`dear ${guest}, you both are invited for the dinner`);
    
    
});

guestList.splice (0, guestList.length)

console.log("updated list of guest:", guestList);