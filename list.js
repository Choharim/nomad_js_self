const listForm = document.querySelector(".list-form");
const listInput =  listForm.querySelector("input");
const doList = document.querySelector(".do-list");

const LS_LIST = "list";
let listArray = [];

function del(event){
  const delBtn=event.target; 
  const delLi=delBtn.parentNode;
  doList.removeChild(delLi);
  const updateArray= listArray.filter(function(text){
    return text.id !== parseInt(delLi.id);
  });
  listArray = updateArray;
  saveListArray();
}

function saveListArray(){
  localStorage.setItem(LS_LIST,JSON.stringify(listArray));
}

function printList(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  doList.appendChild(li);
  span.innerText= text;
  btn.innerText="X";
  li.id = listArray.length + 1;
  btn.addEventListener("click",del);
  const listObj = {
    list: text,
    id: listArray.length + 1
  };
  listArray.push(listObj);
  saveListArray();
}

function subHandle(event){
  event.preventDefault();
  const doValue = listInput.value;
  printList(doValue);
  listInput.value="";
}

function wirteList(){
  listForm.addEventListener("submit",subHandle);
}

function init(){
  wirteList();
  const savedList = localStorage.getItem(LS_LIST);
  if(savedList !== null){
    const paseSavedList = JSON.parse(savedList);
    paseSavedList.forEach(function (text){
      printList(text.list)
    });
  }
}
init();