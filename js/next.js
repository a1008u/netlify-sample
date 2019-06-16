document.getElementById("button-confirm").addEventListener("click",async ()=>{

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  if (name.validity.valid && email.validity.valid && role.validity.valid && message.validity.valid) {
    url = ""
    jsonC = {"name": name.value, 'email': email.value, 'role': role.value,'message': message.value}
    await getFormValid(url, jsonC)
    await set(name.value)
    window.location.href = '../input-cloud/confirm.html';
  }

  console.log(name.validity)
  console.log(email.validity)

})

async function set(name){
  sessionStorage.setItem('name', name);
}

async function getFormValid(request, formInfo) {
  const method = "POST";
  const body = JSON.stringify(formInfo);
  const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  };

  return new Promise(resolve => {
      fetch(request, {method, headers, body})
      .then(response => response.json())
      .then(body => resolve(body));
  });
};

