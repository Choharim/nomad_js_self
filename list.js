const toDoForm = document.querySelector(".toDo-Form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".toDo-list");

let toDoArray = [];

function paintToDo(text){
  const li = document.createElement("li"),
  span = document.createElement("span"),
  delBtn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  span.innerText = "text";
  delBtn.innerText = "X";

}

function submit (Event){
  Event.prevetDefault();
  const inputValue = toDoInput.value;
  paintToDo(inputValue);
  toDoInput.value = "";
}



function init (){
  toDoForm.addEventListener("submit",submit());

}
init();
