let pets = [];//empty array


function Pet(name,age,gender,service){
    //properties = parameter (value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function register(){
    let inputName= document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender =document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;

    //create the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService);
    console.log(newPet);
    pets.push(newPet);
    displayTotals();
    displayCards(); //displayTable()
}

function init(){
    console.log("init");
    let pet1 = new Pet("Q",99,"Male","nails");
    //create two more pets
    let pet2 = new Pet("Squirrely",11,"Female","shampoo");
    let pet3 = new Pet("Springy",5,"Male","nails");
    let pet4 = new Pet("Scooby",99,"Male","Grooming");
    let pet5 = new Pet("Scrappy",88,"Male","Vaccines");
    let pet6 = new Pet("Speedy",87,"Male","Nails");


   //push the pets on the array
   pets.push(pet1,pet2,pet3,pet4,pet5,pet6);
   // display the three pets on the console
   console.log(pets);
   displayTotals();
   displayCards();
}

window.onload=init;//wait to render the HTML




// Const username = "Poodle";
// Const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `img id` : username;

// console.dir(document)
//const pets [1,2,3,4];

const name = prompt('What is the name of your pet?');

const message = `Hello, ${name}. It's ${2*3} o'clock! You're Poodle-ppointment is in 1 hour. Thank you, ${name} `;

// Thank you, ${Boolean} `;

console.log(message);


//SHOUT MSG on page & Console.log\\
const stringToShout = prompt("What do you LOVE about your POODLE?");
const shout = stringToShout.toUpperCase();


const shoutMessage = `The message to shout is: ${shout}!!`;

console.log(shoutMessage);




///ACTUAL PAGE CONTENT SHOUT\\
// let stringToShout = prompt("What do you LOVE about your POODLE?");
// let messageArea = document.getElementById(`messageArea`);

// messageArea.textContent = shoutMessage;
// let shoutMessage = `The message to shout is: ${shout}!!`;

// console.log(shoutMessage);
//argh argh agrh aggrO\\



//Arrays and Object Literals\\
/*
console.log("register.js");
// let pets = []; //empty array
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
    service:"nails",
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
//     console.log(pets[i])
// }


pets.push("Bushy")
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}


//push the pets on the array
pets.push(pet1,pet2,pet3,pet4,pet5,pet6);

console.log(pet3)
// console.log(pets)
//HINTS:
// use a for loop and travel the array
// use brute force
// length the amount of elements on the array

// my_array = [1,2,3,4,5]
// for i in Range(len(my_array));
// print(my_array[i])
*/

