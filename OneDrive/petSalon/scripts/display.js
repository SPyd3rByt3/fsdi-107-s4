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
        console.log(pet.age);
        row+=`
        <tr class="pets">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Vaccine: ${pet.vaccine}</p>
        </tr>
        `;
        console.log(row);
        
    }
    document.getElementById("pets").innerHTML=row;
    // inserts the tables into HTML
}
function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

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