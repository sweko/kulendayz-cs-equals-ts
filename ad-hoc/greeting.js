const greet = (name) => `Hello, ${name}!`;
const people = ["JavaScript", "Wekoslav", "Kulen Dayz", "Osijek"];

const greeted = people.map(greet);

for (const greeting of greeted) {
    console.log(greeting);
}



