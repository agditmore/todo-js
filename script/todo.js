let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

function showList() {
  var entireList = document.getElementById("main-todo-list");
  console.log(todos.length);
  
  for (var i=0; i<todos.length; i++){
    //creating new HTML for each item in the array
    var newListDiv = document.createElement("div");
    var newListCheckbox = document.createElement("input");
    var newListItem = document.createElement("span");

    //assigning attributes to new HTML
    newListDiv.className = "todo";
    newListCheckbox.className = "todo-checkbox";
    newListCheckbox.type = "checkbox";
    newListItem.className = "todo-text";
    newListItem.innerHTML = todos[i].text;

    //actually adding in new HTML
    entireList.appendChild(newListDiv);
    newListDiv.appendChild(newListCheckbox);
    newListDiv.appendChild(newListItem);
  
    //check off already completed tasks
    if (todos[i]["complete"] == true){
      newListCheckbox.checked = true;
      newListDiv = newListDiv.complete;
    };
  };
};

showList();

//add ability to check completed tasks in the future
//newListCheckbox.onclick = function checkOff(){
  //newListDiv.classList.toggle(newListCheckbox.checked, newListDiv.complete);
  //not sure how to identify task in JS array to change complete status
//};