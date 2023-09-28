/* Edit a task functionality */

const editTaskCheck = document.querySelectorAll(".check-task");

editTaskCheck.forEach((check) => {
  check.addEventListener("click", async (event) => {
    const id = event.currentTarget.dataset.id;
    const oldStatus = event.currentTarget.dataset.status;
    const status = oldStatus == "new" ? "done" : "new";
    console.log(oldStatus);
    console.log(status);
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
});
