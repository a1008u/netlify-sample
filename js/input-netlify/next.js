document.getElementById("button-confirm").addEventListener("click",async ()=>{

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  if (name.validity.valid && email.validity.valid && role.validity.valid && message.validity.valid) {
    // jsonC = {"name": name.value, 'email': email.value, 'role': role.value,'message': message.value}
    sessionStorage.setItem("name",name.value)
    sessionStorage.setItem("email",email.value)
    sessionStorage.setItem("role", role.value)
    sessionStorage.setItem("message", message.value)
    window.location.href = '../input-netlify/confirm.html';
  }

})

window.addEventListener("load", async (event) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  const sname = sessionStorage.getItem("name")
  const semail = sessionStorage.getItem("email")
  const srole = sessionStorage.getItem("role")
  const smessage = sessionStorage.getItem("message")

  name.value  = sname ? sname : ""
  email.value  = semail ? semail : ""
  role.value = srole? srole : ""
  message.value  = smessage? smessage : ""
})