console.log("create a todo js");

const todoInputElement = document.getElementById("todoInput");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  const todoName = todoInputElement.value;
  if (todoName) {
    const id = Math.floor(Math.random() * 10 ** 11);
    console.log(id, todoName);
    const todoLists =
      localStorage.getItem("todoLists") === null
        ? []
        : JSON.parse(localStorage.getItem("todoLists"));
    todoLists.push({ id: id, name: todoName });
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
    window.location.href = "video70.html";
  }
});
