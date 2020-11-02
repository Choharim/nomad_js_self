const toDoForm = document.querySelector(".toDo-Form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".toDo-list");


function paintToDo(){

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
