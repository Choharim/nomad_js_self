const name = document.querySelector(".js-name");
const input = name.querySelector("input");
const hello = document.querySelector(".js-hello");

const LS_NAME = "userName";
const SHOW = "showing";

function saveName(text){
  localStorage.setItem(LS_NAME,text);
}

function paintName(text){
  name.classList.remove(SHOW);
  hello.classList.add(SHOW);
  hello.innerText = `Hello ${text} ^__^`;
}

function subHandle(event){
  event.preventDefault();
  const nameValue = input.value;
  paintName(nameValue);
  saveName(nameValue);
}

function askName(){
  name.classList.add(SHOW);
  name.addEventListener("submit",subHandle);

}

function init(){
  const userName = localStorage.getItem(LS_NAME);
  if( userName === null ){
    askName();
  }
  else{
    paintName(userName);
  }
}
init();