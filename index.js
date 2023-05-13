var randomNumber1=Math.floor(Math.random() * 6)+1;

var randomDiceImage="dice" + randomNumber1 + ".png";

var imageSource = "./images/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);


var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomDiceImage2="./images/dice" + randomNumber2 + ".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);