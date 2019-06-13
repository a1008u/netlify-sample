document.getElementById("button-confirm").addEventListener("click",async ()=>{

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  if (name.validity.valid && email.validity.valid && role.validity.valid && message.validity.valid) {
    await set()
    window.location.href = '../html/confirm.html';
  }

  console.log(name.validity)
  console.log(email.validity)

})

async function set(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");
  sessionStorage.setItem('name', name.value);
  sessionStorage.setItem('email', email.value);
  sessionStorage.setItem('role', role.value);
  sessionStorage.setItem('message', message.value);
}