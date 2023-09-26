const editBtns = document.querySelectorAll(".edit-btn");
const delBtns = document.querySelectorAll(".del-btn");

delBtns.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    console.log("button clicked", event.currentTarget.dataset.id);
    const response = await fetch(
      "/api/projects/" + event.currentTarget.dataset.id,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      document.location.reload();
    }
  });
});
