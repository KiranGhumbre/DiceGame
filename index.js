var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImg1= "dice"+randomNumber1+".png";
var randomImgSrc2="./images/"+randomImg1;
document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc2);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImg2= "dice"+randomNumber2+".png";
var randomImgSrc2="./images/"+randomImg2;
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2Win!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}


