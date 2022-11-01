var Card1 = document.getElementById("card1");
var Card2 = document.getElementById("card2");
var Card3 = document.getElementById("card3");
var Card4 = document.getElementById("card4");
var Card5 = document.getElementById("card5");

Card1.onclick = function(){
    Card1.style.transform = "rotate(0deg)";
    Card2.style.transform = "rotate(60deg)";
    Card3.style.transform = "rotate(70deg)";
    Card4.style.transform = "rotate(80deg)";
    Card5.style.transform = "rotate(90deg)";
}
Card2.onclick = function(){
    Card1.style.transform = "rotate(-20deg)";
    Card2.style.transform = "rotate(0deg)";
    Card3.style.transform = "rotate(60deg)";
    Card4.style.transform = "rotate(70deg)";
    Card5.style.transform = "rotate(80deg)";
}
Card3.onclick = function(){
    Card1.style.transform = "rotate(-20deg)";
    Card2.style.transform = "rotate(-10deg)";
    Card3.style.transform = "rotate(0deg)";
    Card4.style.transform = "rotate(50deg)";
    Card5.style.transform = "rotate(60deg)";
}
Card4.onclick = function(){
    Card1.style.transform = "rotate(-30deg)";
    Card2.style.transform = "rotate(-20deg)";
    Card3.style.transform = "rotate(-10deg)";
    Card4.style.transform = "rotate(0deg)";
    Card5.style.transform = "rotate(60deg)";
}
Card5.onclick = function(){
    Card1.style.transform = "rotate(-40deg)";
    Card2.style.transform = "rotate(-30deg)";
    Card3.style.transform = "rotate(-20deg)";
    Card4.style.transform = "rotate(-10deg)";
    Card5.style.transform = "rotate(0deg)";
}