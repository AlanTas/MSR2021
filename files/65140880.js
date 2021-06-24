const name = 'Your Name Here';
document.querySelector('#movies').innerHTML = `
  <div class="row">
    <div class="alert alert-primary w-50 mb-2" role="alert">
      New genre added.
    </div>
  </div>
  <div class="row">
    <div class="card mb-2 w-50">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
      </div>
    </div>
  </div>
`;

const cardsList = document.querySelectorAll('.card-title');
console.log(cardsList[0]);