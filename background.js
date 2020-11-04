const body = document.querySelector("body");

function imgNumber(){
const randomImg = Math.floor(Math.random()*4) + 1;
img (randomImg);
}

function img (number){
  const img = document.createElement("img");
  body.appendChild(img);
  img.classList.add("bgImg");
  img.src = `images/${number}.jpg`;
}

function init(){
  imgNumber();
}
init();