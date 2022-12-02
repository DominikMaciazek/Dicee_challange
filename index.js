
var names =["dice1.png", "dice2.png", "dice3.png","dice4.png","dice5.png","dice6.png"];

var randNum1 = Math.floor(Math.random() * 6);
var randNum2 = Math.floor(Math.random() * 6);
var result1 =names[randNum1];
var result2 =names[randNum2];

document.querySelectorAll("img")[0].setAttribute("src", "images/"+ result1)
document.querySelectorAll("img")[1].setAttribute("src", "images/"+ result2)


if (result1 > result2){document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (result1 < result2){(document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩");
}
else {document.querySelector("h1").innerHTML = "Draw!";}


