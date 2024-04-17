/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Lauri",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
}; */

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: "Lauri",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};

console.log(person);
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("Is admin");
}
