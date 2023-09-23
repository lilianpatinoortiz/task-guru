const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the main page
      Swal.fire({
        text: "Task guru is ready for you...",
        icon: "success",
        background: "white",
        confirmButtonText: "Go",
      }).then((result) => {
        document.location.replace("/homepage");
      });
    } else {
      Swal.fire({
        text: "Login failed",
        icon: "error",
        background: "white",
        confirmButtonText: "Ok",
      });
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
