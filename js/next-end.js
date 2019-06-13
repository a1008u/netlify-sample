window.addEventListener("load", (event) => {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");


  name.textContent = sessionStorage.getItem('name')
  email.textContent = sessionStorage.getItem('email')
  role.textContent = sessionStorage.getItem('role')
  message.textContent = sessionStorage.getItem('message')

  console.log(name.value, email.value, role.value, message.value)
})


document.getElementById("button-end").addEventListener("click",()=>{
  window.location.href = '../html/thank.html';
})