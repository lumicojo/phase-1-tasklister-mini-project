document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
function createNewTask(task) {
  console.log(task);
  let textNode = document.createTextNode(task);
  const list = document.getElementById("tasks")
  list.appendChild(textNode);
  

}

function formSubmit (event) {
  event.preventDefault()
  
  const formInput = document.getElementById("new-task-description").value
  createNewTask(formInput)
}

const taskForm = document.getElementById("create-task-form");
taskForm.addEventListener("submit", (event) => 





