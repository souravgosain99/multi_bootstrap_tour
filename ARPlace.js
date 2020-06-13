var place =document.getElementById("Place");
place.addEventListener("click",function(){
    tour2.next();

    
    
})
var home =document.getElementById("Home");
home.addEventListener("click",function(){
    tour2.end();

    window.open("home.html");
    
})