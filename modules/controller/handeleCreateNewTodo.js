import {toastify} from "./../components/toastify.js"
const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const mainUl = document.getElementById("main");
export const handeleCreateNewTodo = (event) => {
    event.preventDefualt();
    if (!todoTitle.value) return toastify("please inter a valid title..." , {
        time : 1000,
        type : "warn"
    });
    const newTodo = {
      title: todoTitle.value,
      desc: todoDesc.value,
    };
    const listItem = document.createElement("li");
    const todoTitleHeading = document.createElement("h3");
    todoTitleHeading.innerHTML = newTodo.title;
    const todoDescPara = document.createElement("p");
    todoDescPara.innerHTML = newTodo.desc;
    listItem.appendChild(todoTitleHeading);
    listItem.appendChild(todoDescPara);
  
    listItem.className = "list-item";
    //listItem.setAttribute("class" , "list-item")
  
    todoTitleHeading.style.color = "red";
    todoTitleHeading.style.backgroundColor = "orange";
    const todoActions = ` <div>
      <button>delit</button>
      <button>edit</button>
      <button>update</button>
      </div>`;
    mainUl.innerHTML += todoActions;
    mainUl.appendChild(listItem);
  };