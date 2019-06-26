document.getElementById("button-confirm").addEventListener("click",async ()=>{

  const name1 = document.getElementById("name1");
  const name2 = document.getElementById("name2");
  const email1 = document.getElementById("email1");
  const email2 = document.getElementById("email2");

  if (name1.validity.valid && name2.validity.valid && email1.validity.valid && email2.validity.valid) {
    window.location.href = '../input-netlify/confirm.html';
  }

  console.log(name.validity)
  console.log(email.validity)

})
