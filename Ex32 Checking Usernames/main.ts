let current_users: string[] = ["saba", "admin", "ahmed", "babar", "raza"];
let new_users: string[] = ["fawad", "hussain", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
if (
current_users.some(
(currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
)

) {
console.log(`${newUser} will need to enter a new username.`);
} else {

console.log(`${newUser} is available.`);
}
});