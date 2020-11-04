const clockTime = document.querySelector(".clock-time");
const clockDay =document.querySelector(".clock-day");

function currentClock(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clockTime.innerText = `${hour <10 ? `0${hour}` : hour}:${minute <10 ? `0${minute}` : minute}:${second <10 ? `0${second}` : second}`; 
  clockDay.innerText =  `${year}.${month}.${day}`;
}
function init(){
  setInterval(currentClock,1000);
}
init();