//--Extra--
//add user input
//let the user choose options
//run until the user exits

const readline = require("readline"); //readline module to read user input

// JSON data as string
const jsonString = `
[
  {
    "id": 1,
    "title": "Fix login bug",
    "status": "pending",
    "deadline": "2025-05-10"
  },
  {
    "id": 2,
    "title": "Write unit tests",
    "status": "completed",
    "deadline": "2025-06-01"
  },
  {
    "id": 3,
    "title": "Update README documentation",
    "status": "pending",
    "deadline": "2025-04-15"
  },
  {
    "id": 4,
    "title": "Design new user profile page",
    "status": "pending",
    "deadline": "2025-04-01"
  }
]
`;

//parse the JSON string into JavaScript array
const tasks = JSON.parse(jsonString);

// function for count the pending task
function countPendingTasks(taskList) {
  return taskList.filter(task => task.status === "pending").length; //use filter() to keep only pending tasks, then .length to count them.
}

// function to get the complete task title
function getCompletedTaskTitles(taskList) {
  return taskList
    .filter(task => task.status === "completed") // filter() only keeps the completed task
    .map(task => task.title); //map() takes only the title of each completed task.
}

//function to sort tasks by deadline in ascending order
function sortTasksByDeadline(taskList) {
  return [...taskList].sort(function (a, b) { //[...taskList] makes a copy, sort() arranges tasks based on deadline date.
    return new Date(a.deadline) - new Date(b.deadline); // if deadline (a) is earlier than (b), it returns negative when substract, meaning (a) comes before (b).
  });
}

// function for filter the tasks using keyword, it checks title, status, deadline
// includes() checks if the keyword exists in those fields
function filterTasksByKeyword(taskList, keyword) {
  const lowerKeyword = keyword.toLowerCase(); // convert keyword to lowercase so search is not case-sensitive.

  return taskList.filter(task => {
    return (
        task.title.toLowerCase().includes(lowerKeyword) ||
        task.status.toLowerCase().includes(lowerKeyword) ||
        task.deadline.toLowerCase().includes(lowerKeyword)
    );
  });
}

//sets up the input/output to interact with user via console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*--function display menu UI for user input --*/
function showMenu() {
  console.log("\n--- Task Manager Menu ---");
  console.log("1. Count pending tasks");
  console.log("2. Show completed task titles");
  console.log("3. Sort tasks by deadline (ascending order)");
  console.log("4. Filter tasks by keyword (Title/Status/Deadline)");
  console.log("5. Exit");

  //asks the user to choose a menu option then user input is stored in "option".
  rl.question("Choose an option: ", function (option) {
    switch (option) {
      case "1":
        console.log("Pending task:", countPendingTasks(tasks), "task");
        showMenu();
        break;

      case "2":
        console.log("Completed task titles:", getCompletedTaskTitles(tasks));
        showMenu();
        break;

      case "3":
        console.log("Sorted by deadline:", sortTasksByDeadline(tasks));
        showMenu();
        break;

      case "4":
        rl.question("Enter keyword: ", function (keyword) {
          console.log("Filtered tasks:", filterTasksByKeyword(tasks, keyword));
          showMenu();
        });
        break;

      case "5":
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        console.log("Invalid option. Please try again.");
        showMenu();
    }
  });
}

// show menu when start the program
showMenu();


