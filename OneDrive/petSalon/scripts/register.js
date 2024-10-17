let pets = [];//empty array

let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputService= document.getElementById("txtService");
let inputBreed= document.getElementById("txtBreed");
let inputVaccine= document.getElementById("txtVaccine");

function Pet(name,age,gender,service,breed,vaccine){
    //properties = parameter (value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.vaccine=vaccine;
}

function isValid(pet){
    let validation=true;

    if(pets.name==""){
        validation = false;
    }
    if(pet.service==""){
        validation = false;

    }

    return validation;
}

function register(){
    // let inputName= document.getElementById("txtName").value;
    // let inputAge = document.getElementById("txtAge").value;
    // let inputGender =document.getElementById("txtGender").value;
    // let inputService = document.getElementById("txtService").value;

    //create the obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value,inputVaccine.value);
    console.log(newPet);

    if(isValid(newPet)==true){
    pets.push(newPet);
    displayTotals();
    // displayCards(); 
    displayTable()
    }  
    // }else{
        // alert("Complete all information.")
    // }
}

function deletePet(petId){
    console.log("Deleting pet..."  + petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayTable();
    displayTotals();
}

function init(){
    console.log("init");
    let pet1 = new Pet("Q",99,"Male","nails","Labradoodle","yes");
    //create two more pets
    let pet2 = new Pet("Squirrely",11,"Female","shampoo");
    let pet3 = new Pet("Springy",5,"Male","nails","Toy", "no");
    let pet4 = new Pet("Scooby",99,"Male","Grooming");
    let pet5 = new Pet("Scrappy",88,"Male","Cut/Style");
    let pet6 = new Pet("Speedy",87,"Male","Nails");


   //push the pets on the array
    pets.push(pet1,pet2,pet3,pet4,pet5,pet6);
   // display the three pets on the console
    console.log(pets);
    displayTotals();
    // displayCards();
    displayTable();
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

