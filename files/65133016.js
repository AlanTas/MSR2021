editUser.addEventListener('click', retrieveAndSendUpdate);

function retriveAndSendUpdate() {
  const username = document.getElementById('username');
  const phone = document.getElementById('editPhone');
  const city = document.getElementById('newCity');
  const zip = document.getElementById('newZip');
  const address = document.getElementById('newAddress');
  const email = document.getElementById('newEmail');
  const password = document.getElementById('newPassword');

  var data = {
    username: username.value,
    phone: phone.value,
    city: city.value,
    zip: zip.value,
    address: address.value,
    email: email.value,
    password: password.value,
  }

  sendUpdate(data);
}

function sendUpdate(data) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json"
  xhr.addEventListener("readystatechange", processResponse);
  xhr.open("PUT", "http://localhost:2500/editProfile", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

function processResponse(e) {
  if (e.readyState === 4) {
    var allUsers = e.response;
    for (i = 0; i < allUsers.length; i++) {
      if (allUsers[i].username === username) {
        allUsers.splice(i, 1);
        console.log(allUsers)
      }
    }
  }
}
