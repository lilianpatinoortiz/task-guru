const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#title").value.trim();
    const description = document.querySelector("#content").value.trim();
  
    if (title && content) {
      const response = await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({ name, description }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".newpost-form")
    .addEventListener("submit", newPostFormHandler);