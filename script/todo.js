let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

var entireList = document.getElementById("main-todo-list");
var toDoCount = document.getElementById("remaining-count");
function showList() {
  var count = 0;
  for (var i=0; i<todos.length; i++){
    //creating new HTML for each item in the array
    var newListDiv = document.createElement("div");
    var newListCheckbox = document.createElement("input");
    var newListItem = document.createElement("span");

    //assigning attributes to new HTML
    newListDiv.className = "todo";
    newListDiv.id = i;
    newListCheckbox.className = "todo-checkbox";
    newListCheckbox.type = "checkbox";
    newListCheckbox.id = i;
    newListItem.className = "todo-text";
    newListItem.innerHTML = todos[i].text;

    //actually adding in new HTML
    entireList.appendChild(newListDiv);
    newListDiv.appendChild(newListCheckbox);
    newListDiv.appendChild(newListItem);
  
    //check off already completed tasks
    if (todos[i]["complete"] == true){
      newListCheckbox.checked = true;
      newListDiv.classList.add("complete");
    };

    //add ability to check completed tasks in the future
    //newListCheckbox.onclick = function checkOff(){
      //checkListDiv.classList.toggle(newListCheckbox.checked);
      //newListDiv.classList.add("complete");
      //todos[i]["complete"] = !todos[i]["complete"];


      // if (newListCheckbox.checked == false){
      //   newListCheckbox.checked = true;
      //   newListDiv.classList.add("complete");
      // }
      // else {
      //   newListCheckbox.checked = false;
      //   newListDiv.classList.remove("complete");
      // };

    //count items left to do
    if (todos[i]["complete"] == false){
      count++;
    };
    };
    toDoCount.innerText = count;
  };

showList();