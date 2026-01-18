console.log("Video 43");

const person = {
    name1: "hoidanit",
    age: 25
}

console.log("person: ", person);

console.log("age: ", person.age);
console.log("name: ", person["name1"]);

person.address = "hanoi";
person["language"] = "vietnamese";

delete person.address;

console.log("person after: ", person);