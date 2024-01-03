const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === "") {
      alert("You must write something..!");
    } else {
      // Create a new list item
      let li = document.createElement("li");
      li.innerHTML = inputBox.value; // Set the content of the list item to the input value
      listContainer.appendChild(li); // Append the list item to the list container
  
      // Create a close button (span) for the list item
      let span = document.createElement("span");
      span.innerHTML = "\u00d7"; // Set the close button content to 'x'
      li.appendChild(span); // Append the close button to the list item
    }
  
    // Clear the input box after adding a task
    inputBox.value = "";
  
    // Save the updated data to local storage
    saveData();
  }
  
  // Event listener for marking tasks as completed or removing them
  listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle the 'checked' class to mark/unmark the task
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the parent list item when the close button is clicked
      saveData();
    }
  }, false);
  
  // Function to save the current state of the task list to local storage
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }
  
  // Function to load and display tasks from local storage
  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }
  
  // Call the showTask function to display tasks when the page loads
  showTask();
  