//Generate random flag 1
var randomNum1 = Math.floor(Math.random() * 14) + 1; //random num 1-6
var randomImage  = "flag" + randomNum1 + ".png" //random image from flag1.png to flag14.png
var randomImageSource = "images/" + randomImage // random src from images/flag1.png - images/flag6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Generate random flag 2
var randomNum2 = Math.floor(Math.random() * 14) + 1;
var randomImageSource2 = "images/flag" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNum1 === randomNum2)
{
  document.querySelector("h1").innerHTML = "‍🏆Match!!!🏆"
}
else
{
  document.querySelector("h1").innerHTML = "☠️Try Again‍☠️"
}
