const greet = (name: string) => `Hello, ${name}!`;
const people = ["TypeScript", "Wekoslav", "DWX", "Nürnberg"];

const greeted = people.map(greet);

for (const greeting of greeted) {
    console.log(greeting);
}