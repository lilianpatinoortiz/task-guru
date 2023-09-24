const newProjectFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#name").value.trim();
    const description = document.querySelector("#description").value.trim();
  
    if (name && description) {
      const response = await fetch("/api/projects/", {
        method: "POST",
        body: JSON.stringify({ name, description }),
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
    .querySelector(".newproject-form")
    .addEventListener("submit", newProjectFormHandler);