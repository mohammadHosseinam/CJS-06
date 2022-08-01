import {handeleCreateNewTodo} from "./modules/controller/handeleCreateNewTodo.js"

const submitTodoButton = document.getElementById("submit");

submitTodoButton.addEventListener("click", handeleCreateNewTodo);
