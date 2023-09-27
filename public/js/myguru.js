const editBtns = document.querySelectorAll(".edit-btn");
const delBtns = document.querySelectorAll(".del-btn");

delBtns.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    console.log("button clicked", event.currentTarget.dataset.id);
    const path = "/api/projects/" + event.currentTarget.dataset.id;
    console.log(path)
    const response = await fetch(
      path,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response)
    if (response.ok) {
      document.location.reload();
    }
  });
});
