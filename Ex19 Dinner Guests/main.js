var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
// for(let i=0; i // // console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
var not_present = 'farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
// for(let i=0; i // // console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('original :' + guest_list.sort());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original :' + guest_list.sort().reverse());
