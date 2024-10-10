console.log("register.js");
let pets = []; //empty array
//create pets
let pet1 = {
    name:"Q",
    age:99,
    gender:"male",
    service:"trim",
    breed:"Labradoodle",
}

let pet2 = {
    name:"Squirrely",
    age:11,
    gender:"not-identified",
    service:"shampoo",
    breed:"Poodle"
}
let pet3 = {
    name:"Springy",
    age:5,
    gender:"female",
    service:"cut/style",
    breed:"Toy"
}


function displayName(){
    //display pet names
    console.log(pets[1].name);
    console.log(pets[2].name);
    console.log(pets[3].name);
    
}

for (let i = 0; i < 10; i++) {
    //const element = array[i];
    console.log(pets[i]);
    
}

// for (let i = 0; i < 6; i++) {
//     console.log(cars[i])
// }


pets.push("Bushy")
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}

// cars.push("Bugatti")
// cars.push("Ferrari")
// for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i])
// }

console.log(pet2)
// console.log(pets)
//HINTS:
// use a for loop and travel the array
// use brute force
// length the amount of elements on the array