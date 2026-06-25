//For image 1 to change
var randomN1 = Math.random();
randomN1 = Math.floor((randomN1 * 6) + 1);


var changedice = "./images/dice" + randomN1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", changedice);


//For image 2 to chnage

var randomN2 = Math.random();
randomN2 = Math.floor((randomN2 * 6) + 1);


var changedice2 = "./images/dice" + randomN2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", changedice2);


//Using if
if(randomN1 > randomN2){
    document.querySelector("h1").innerHTML = ("Player 1 WON");
}
else if(randomN1 < randomN2){
    document.querySelector("h1").innerHTML = ("Player 2 WON");
}
else{
    document.querySelector("h1").innerHTML = ("Draw");
}
