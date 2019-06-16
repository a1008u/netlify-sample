window.addEventListener("load", async (event) => {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  url = ""
  tmpJson = await getTmpJson(url, {"name":sessionStorage.getItem('name')})
  console.log(tmpJson)

  name.textContent = tmpJson.name
  email.textContent = tmpJson.email
  role.textContent = tmpJson.role
  message.textContent = tmpJson.message
})


document.getElementById("button-end").addEventListener("click", async ()=>{

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  url = ""
  jsonC = {"name": name.textContent, 'email': email.textContent, 'role': role.textContent, 'message': message.textContent}
  await setInfo(url, jsonC)

  sessionStorage.removeItem('name')

  window.location.href = '../input-cloud/thank.html';
})

document.getElementById("button-back").addEventListener("click", async ()=>{

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");
  const message = document.getElementById("message");

  url = ""
  jsonC = {"name": name.textContent, 'email': email.textContent, 'role': role.textContent, 'message': message.textContent}
  console.log(jsonC)
  await setInfo(url, jsonC)
  sessionStorage.removeItem('name')
  window.location.href = '../input-cloud/input.html';
})

async function getTmpJson(request, nameJson){
  const method = "POST";
  const body = JSON.stringify(nameJson);
  const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  };

  return new Promise(resolve => {
      fetch(request, {method, headers, body})
      .then(response => response.json())
      .then(body => resolve(body));
  });
}


async function setInfo(request, formInfo) {
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
