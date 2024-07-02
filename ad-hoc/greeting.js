const greet = (name) => `Hello, ${name}!`;
const people = ["JavaScript", "Wekoslav", "DWX", "Nürnberg"];

const greeted = people.map(greet);

for (const greeting of greeted) {
    console.log(greeting);
}



