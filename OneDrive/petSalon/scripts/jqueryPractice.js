console.log("Welcome to jquery library.");

// === ID ===
// document.getElementById("red"); //Javascript

//$("#red"); //jQuery

// #id  method  key , value //
$("#red").css("color","red").css("background-color","black");
$("#blue").css("color","blue").css("background-color","#ffcc00");
$("#pimk").css("color","pink").css("background-color","purple");

// === CLASS ===
$(".title-tw0").css("color","green").css("font-size","48px");
// add a border to the paragraph with-border
$(".with-border").css("border","5px dashed red");
// ("border-color","red");

$(".my-border").click(function(){
    console.log("My border was clicked");
    $(this).css("border","5px dashed red");
    $(this).addClass("error"); //can continuously add more classes to any html/css
});



// === TAGS ===
$("h3").css("background-color","gray").css("cursor","pointer");

let myTitle = $("h3");

myTitle.mouseover(function(){
    $(this).css("background-color","green");
});
myTitle.mouseleave(function(){
    $(this).css("background-color","light-gray");
});

