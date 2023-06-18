function validateForm() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if (username === "" || name === "" || password === "" || repassword === "") {
      alert("All fields are required.");
      return false;
    }
    if (password !== repassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  }