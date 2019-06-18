window.addEventListener("load", async (event) => {

  const form = document.forms.contact;
  form.name.value = sessionStorage.getItem("name")
  form.email.value = sessionStorage.getItem("email")
  form.role.value = sessionStorage.getItem("role")
  form.message.value = sessionStorage.getItem("message")
  form.name.disabled = true;
  form.email.disabled = true;
  form.role.disabled = true;
  form.message.disabled = true;
})

document.getElementById("button-back").addEventListener("click", async ()=>{
  window.location.href = '../input-netlify/input.html';
})

document.getElementById("button-next").addEventListener("click", async ()=>{
  const form = document.forms.contact;
  form.name.disabled = false;
  form.email.disabled = false;
  form.role.disabled = false;
  form.message.disabled = false;
})