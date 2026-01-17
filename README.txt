# Task 1

//Overview
This program written in Node.js as it use require("readline") which is built-in Node.js module that works in the terminal
It reads task data from a JSON string and allows the user to perform several actions using a text-based menu.

//Approach
1. Parse the JSON data:
    The task list is stored as a JSON string. 
    Then convert it into a JavaScript array using JSON.parse() to work with it.

2. Create functions to Count number of pending task, List completed task titles, Sort tasks by deadline in ascending order, 
    and Filter tasks by keyword.

3. Use array methods:
    a. filter() is used to select tasks that match conditions.
    b. map() is used to extract only the titles of completed tasks.
    c. sort() is used to order tasks by deadline.

4. Create an interactive menu:
    a. Using the readline module, the program shows a menu.
    b. User chooses an option by typing a number.
    c. The program performs the chosen action and shows the menu again.
    d. The program keeps running until the user chooses to exit.

5. Display results: After each action, the program prints the result in the terminal, allows the user to see the output immediately.


//How to Run (VS Code)
1. Install Node.js
2. Go to my project folder GitHub link, then download the folder or open with GitHub desktop in VS Code
3. Open the terminal in VS Code
4. Run the program with command : node test.js