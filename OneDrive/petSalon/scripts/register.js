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
    console.log(pets[0].name);
    console.log(pets[1].name);
    
    
}

//HINTS:
// use a for loop and travel the array
// use brute force
// length the amount of elements on the array