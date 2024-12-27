let guestList:string[] = ["Usaman","Ubaid","Liquat"];

let unableAttend:string | undefined = guestList.splice (1,1)[0];

console.log(`${unableAttend}, not invited for dinner.`);

guestList.push("Danyal");

guestList.forEach(guest => {

    console.log(`Dear ${guest}, you are cordailly invited.`);
    
    
});




