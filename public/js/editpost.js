const editProjectFormHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    console.log("edit");

    const id = event.target.getAttribute("data-id");
    const name = document.querySelector("#name").value.trim();
    const description = document.querySelector("#description").value.trim();
    const due_date = document.querySelector("#date").value.trim();

    if (name && description && due_date) {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, description }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/myguru");
      } else {
        alert(response.statusText);
      }
    }
  }
};

document
  .querySelector(".editproject-form")
  .addEventListener("submit", editProjectFormHandler);
