// Define an interface for the object structure
interface Item {
name: string;
price: number;
}

// Create two objects using the interface
const book: Item = {
name: "ESSENTIAL TYPESCRIPT ",
price: 12.99,
};

const apple: Item = {
name: "Apple",
price: 0.99,
};

// Access and print the object properties
console.log(`Book name: ${book.name}, price: $${book.price}`);
console.log(`Apple name: ${apple.name}, price: $${apple.price}`);
