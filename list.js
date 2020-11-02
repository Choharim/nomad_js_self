const toDoForm = document.querySelector(".toDo-Form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".toDo-list");


const toDoArrayKey = "toDoArray";
let toDoArray = [];


function saveLS(){
 localStorage.setItem(toDoArrayKey,JSON.stringify(toDoArray));
}

function saveArray(text){
  const listId = toDoArray.length + 1;
  const toDoObject = {
    text: text,
    id: listId
  };
  toDoArray.push(toDoObject);
}

function del(event){
  const clickedBtn = event.target;
  const li = clickedBtn.parentNode;
  toDoList.removeChild(li);
  const updateArray =  toDoArray.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDoArray = updateArray;
  saveLS();
}

function loadList(){
  const loadedList = localStorage.getItem(toDoArrayKey);
  const parsedList = JSON.parse(loadedList);
  parsedList.forEach(function(toDo){
    paintToDo(toDo.text);
  });
}

function paintToDo(text){
  const li = document.createElement("li"),
  span = document.createElement("span"),
  delBtn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  span.innerText = text;
  delBtn.innerText = "X";
  const listId = toDoArray.length + 1;
  li.id = listId;
  saveArray(text);
  saveLS();
  delBtn.addEventListener("click",del);
}

function submit (event){
  event.preventDefault();
  const inputValue = toDoInput.value;
  paintToDo(inputValue);
  toDoInput.value = "";
}

function init (){
  toDoForm.addEventListener("submit",submit);
  if(toDoArray !== null){
    loadList();
  }
}
init();
