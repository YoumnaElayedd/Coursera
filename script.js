function checkpassword() {
  let password = document.getElementById("password").value;
  let cnfrmpassword = document.getElementById("cnfrmpassword").value;
  console.log(password, cnfrmpassword);
  let message = document.getElementById("message");
  if (password.length != 0) {
    if (password == cnfrmpassword) {
      message.textContent = "passwaords match";
    } else {
      message.textContent = "passwords don't match";
    }
  }
}
function Emailcheck() {
  let Message = document.getElementById("Message");
  let email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    Message.textContent = "valid";
  } else {
    Message.textContent = "invalid";
  }
}
function Sent() {
  alert("sent successfully");
}
