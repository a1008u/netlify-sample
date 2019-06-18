window.addEventListener("load", async (event) => {

  const form = document.forms.contact;
  form.name.value = sessionStorage.getItem("name")
  form.email.value = sessionStorage.getItem("email")
  form.role.value = sessionStorage.getItem("role")
  form.message.value = sessionStorage.getItem("message")
  // form.name.disabled = true;
  // form.email.disabled = true;
  // form.role.disabled = true;
  // form.message.disabled = true;

  // const name = document.getElementById("name");
  // const email = document.getElementById("email");
  // const role = document.getElementById("role");
  // const message = document.getElementById("message");
  // name.value = sessionStorage.getItem("name")
  // email.value = sessionStorage.getItem("email")
  // role.value = sessionStorage.getItem("role")
  // message.value = sessionStorage.getItem("message")
  // name.disabled = true;
  // email.disabled = true;
  // role.disabled = true;
  // message.disabled = true;
})

document.getElementById("button-back").addEventListener("click", async ()=>{
  window.location.href = '../input-netlify/input.html';
})