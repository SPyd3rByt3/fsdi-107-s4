function displayCards(){
    let card="";
    for(let i=0;i<pets.length;i++){
        // document.getElementById("pets").innerHTML+=
        let pet = pets[i];
        console.log(pet.age);
        card+=`
        <div class="pets">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Vaccine: ${pet.vaccine}</p>
        </div>
        `;
        console.log(card);
        
    }
    document.getElementById("pets").innerHTML=card;
    // inserts the card into HTML
}

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

function displayTable(){
    let row="";
    for(let i=0;i<pets.length;i++){
        // document.getElementById("pets").innerHTML+=
        let pet = pets[i];
        // console.log(pet.age);
        row+=`
        <tr id="${i}">
            <td>Name: ${pet.name}</td>
            <td>Age: ${pet.age}</td>
            <td>Gender: ${pet.gender}</td>
            <td>Service: ${pet.service}</td>
            <td>Breed: ${pet.breed}</td>
            <td>Vaccine: ${pet.vaccine}</td>
            <td><button class="btn btn-danger" 
            onclick="deletePet(${i})">Delete </button><td>
        </tr>`
        console.log(row);
        
    }
    document.getElementById("petTable").innerHTML=row;
    // inserts the tables into HTML
}

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}


// create the deletePet function under the register.js and display on the console "Deleting pet.."

    // .. 
    //..
    //..

    // instead of card use row
    //row +=`<tr></tr>`
    // read about HTML tables
    
// }

// for (let i = 0; i < cars.length; i++) {
    // document.getElementById("result").innerHTML+=`
        // <div class="cars">
            // <h6>Car ID: ${i}</h6>
            // <img src="${image[i]}"/>
            // <p>Car: ${cars[i]}</p>
            // <p>Color: ${color[i]}</p>
        // </div>
    // `
// }