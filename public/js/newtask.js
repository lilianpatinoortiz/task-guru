const newTaskFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const due_date = document.querySelector("#date").value.trim();
  const project_id = document.querySelector("#project").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (name && description && project_id && due_date && priority) {
    const response = await fetch("/api/tasks/", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        due_date,
        project_id,
        priority,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/myguru");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".newtask-form")
  .addEventListener("submit", newTaskFormHandler);

var nameValue = document.getElementById("name").value;
var namePlaceholder = document.getElementById("name").placeholder;

var descriptionValue = document.getElementById("description").value;
var descriptionPlaceholder = document.getElementById("description").placeholder;

var dateValue = document.getElementById("date").value;
var datePlaceholder = document.getElementById("date").placeholder;

//onchange

const config = {
  name: nameValue ? nameValue : namePlaceholder,
  description: descriptionValue ? descriptionValue : descriptionPlaceholder,
  startDate: dateValue ? dateValue : datePlaceholder,
  endDate: dateValue ? dateValue : datePlaceholder,
  options: ["Apple", "Google", "Outlook.com"],
};
const button = document.getElementById("my-default-button");
if (button) {
  button.addEventListener("click", () => atcb_action(config, button));
}
