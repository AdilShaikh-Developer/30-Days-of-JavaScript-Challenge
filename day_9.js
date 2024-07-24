// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("paragraph").innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis veniam repellat.Inventore voluptas quisquam nesciunt itaque architecto esse repudiandae, obcaecati provident sint vel.";

// Task 2: Select an HTML element by its class and change its background color.
document.getElementsByClassName("container").item(0).style.backgroundColor =
  "cornflowerblue";

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement("div");
div.innerText = "I'm virtually created div using JavaScript";
document.body.append(div);

// Task 4: Create a new li element and add it to an existing ul list.
const li = document.createElement("li");
li.innerText = "read book";
document.querySelector("ul").append(li);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.getElementsByTagName("div").item(1).remove();

// Task 6: Remove the last child of a specific HTML element.
document.querySelector("ul").lastChild.remove();

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.querySelector("img").srcset =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMV4Tl-Aaafrmi-L8EPzD1244MK43q9suRxQ&s";

// Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector("div").classList.remove("container");
document.querySelector("div").classList.add("container");

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.querySelector("p").innerText =
    "Recycling is crucial for the environment as it reduces waste, conserves natural resources, and lowers greenhouse gas emissions. By reusing materials like paper, plastic, and metal, we can minimize the need for new raw materials, thus preserving ecosystems and reducing pollution. Simple actions, such as sorting recyclables at home, can make a significant impact on our planet's health.";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
button.addEventListener("mouseover", (e) => {
  console.log((e.target.style.borderColor = "cornflowerblue"));
});

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
(() => {
  document.getElementById("list-heading").innerText = "Schedule";
})();

// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
(() => {
  const div = document.createElement("div");
  div.classList.add("sqaure");
  document.body.append(div);
})();

// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
(() => {
  document.querySelector(".sqaure").remove();
})();

// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
(() => {
  document.querySelector(".container").setAttribute("value", "container");
})();

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
(() => {
  document
    .querySelector("img")
    .addEventListener(
      "mouseenter",
      (e) => (e.target.style.borderRadius = "1rem")
    );
  document
    .querySelector("img")
    .addEventListener("mouseleave", (e) => (e.target.style.borderRadius = "0"));
})();

// Achievement:
// By the end of these activities, students will:
// 1. Select and manipulate DOM elements using JavaScript.
// 2. Create and append new elements to the DOM.
// 3. Remove elements from the DOM.
// 4. Modify attributes and classes of HTML elements.
// 5. Add and handle events to make web pages interactive.
