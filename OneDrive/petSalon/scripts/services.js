// Create another page named services.html and create another form to register services4
// Create the constructor for the service objects
function Service(title,price){
    this.title=title;
    this.price=price;
}


function isValid(service){
    let isValidTitle=true;
    let isValidPrice=true;

    if (service.title=="") {
        isValidTitle=false;
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
        isValidTitle=true;
    }
    // return isValidTitle && isValidPrice;
    // this.title=title;
    // this.price=price;
// }
    if (service.price=="") {
        isValidPrice=false;
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
        isValidPrice=true;
    }
    return isValidTitle && isValidPrice;
    // this.title=title;
    // this.price=price;
}


function register(){
    // this.title=title;
    // this.price=price;
    // getting title and price from inputse
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();
    // let newService = new service(inputTitle)

    // console.log("title:"+inputTitle);
    // console.log("price:"+inputPrice);
    let newService = new Service(inputTitle,inputPrice);
    console.log("Is Valid?", isValid(newService));
    
    if (isValid(newService)) {
        console.log(newService);
        //save(service)
    }
    
}

function init(){
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    // hook event
    $("#btnRegister").click(register);
    $( "#txtPrice" ).on( "keypress", function( event ) {
        if ( event.which == 13 ) {
            register();
        }
    });
}

window.onload=init;



// // //creating the constructor
// function Service(title,price){
//     this.title=title;
//     this.price=price;
// }
// function isValid(service){
//     let isValidTitle=true;
//     let isValidPrice=true;
//     if(service.title==""){
//         isValidTitle=false;
//         $("#txtTitle").addClass("error");
//         $(".titleValidationMsg").css("color","red").show();
//     }else{
//         $("#txtTitle").removeClass("error");
//         $(".titleValidationMsg").hide();
//         isValidTitle=true;
//     }
//     if(service.price==""){
//         isValidPrice=false;
//         $("#txtPrice").addClass("error");
//         $(".priceValidationMsg").css("color","red").show();
//     }else{
//         $("#txtPrice").removeClass("error");
//         $(".priceValidationMsg").hide();
//         isValidPrice=true;
//     }
//     return isValidTitle && isValidPrice;
// }
// function register(){
//     // getting title and price from inputs
//     let inputTitle=$("#txtTitle").val();
//     let inputPrice=$("#txtPrice").val();
//     let newService = new Service(inputTitle,inputPrice);
//     console.log("Is valid? ", isValid(newService));
    
//     if(isValid(newService)){
//         console.log(newService);
//         //save(service)
//     }
// }
// function init(){
//     $(".titleValidationMsg").hide();
//     $(".priceValidationMsg").hide();
//     //hook events
//     $("#btnRegister").click(register);
//     $( "#txtPrice" ).on( "keypress", function( event ) {
//         if ( event.which == 13 ) {
//             register();
//         }
//     });
// }

// window.onload=init;