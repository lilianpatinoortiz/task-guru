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
