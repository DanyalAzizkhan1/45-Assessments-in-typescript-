let guestList:string[] = ["Usaman","Ubaid","Liquat","Danyal"];

console.log("Great news! we found a bigger table");

guestList.unshift("Sameer");

guestList.splice(Math.floor(guestList.length/2),0,"Anas");

guestList.push("cheetah")

console.log(guestList);


guestList.forEach(guest => {

    console.log(`Dear ${guest}, you all are cordially invited to dinner `);
    
    
});