document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "user" && password === "password") {
    alert("Login successful!");
  } else {
    document.getElementById("error-message").innerText = "Invalid username or password.";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("login-form").classList.add("slide-in");
  }
});
