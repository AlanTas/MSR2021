let site_select = document.getElementById('sites');
let contact_select = document.getElementById('client_contact');
let client_select = document.getElementById('client');

const fetchClientSites = (client) => {
  return fetch('/client-sites/' + client)
    .then(response => response.json())
    .then(function(data) {
      let optionHTML = '';

      for (let csite of data.client_sites) {
        optionHTML += '<option value="' + csite.id + '">' + csite.name + '</option>';
      }

      site_select.innerHTML = optionHTML;
    });
};

const fetchContacts = (client) => {
  return fetch('/contacts/' + client)
    .then(response => response.json())
    .then(function(data) {
      let optionHTML = '';

      for (let con of data.contacts) {
        optionHTML += '<option value="' + con.id + '">' + con.name + '</option>';
      }

      contact_select.innerHTML = optionHTML;
    });
};

client_select.addEventListener('change', () => {
  const client = client_select.value;

  Promise.all(
    fetchClientSites(client),
    fetchContacts(client),
  );
});

