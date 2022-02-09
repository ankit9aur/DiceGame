function setImage(x,y){
    document.querySelector(".img1").setAttribute("src","dice"+x+".png");
    document.querySelector(".img2").setAttribute("src","dice"+y+".png");
}
let randomVal1=Math.floor(Math.random()*6)+1;
let randomVal2=Math.floor(Math.random()*6)+1;
if(randomVal1>randomVal2){
    document.querySelector("h1").innerHTML="Player 1 Wins !!";
}
else if(randomVal2>randomVal1){
    document.querySelector("h1").innerHTML="Player 2 Wins !!";
}
else{
    document.querySelector("h1").innerHTML="Draw !!";
}
setImage(randomVal1,randomVal2);