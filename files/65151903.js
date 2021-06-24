// students is renamed to items as I'm sure these were not students
let items = [{
    // size is now a number, so it's easier to work with
    size: 105000,
    material: 'Aluminium',
    color: 'Dark Blue',
    image: 'https://source.unsplash.com/wpOnFM9hjNI/300x300',
  },
  {
    size: 90000,
    material: 'Stainless',
    color: 'Dark Grey',
    image: 'https://source.unsplash.com/LKiB35E8iGA/300x300',
  },
];

// instead of listening to button clicks we listen to form submit
document.querySelector('form').addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  // prevent page reload
  event.preventDefault();
  // get the form elements
  let {
    depth,
    width
  } = event.target.elements;

  // multiply the fields' values
  let product = parseFloat(depth.value) * parseFloat(width.value);
  // get the item by size
  let item = getItem(product);
  // if there is an item found
  let result = item
    ? `<h2>Material: ${item.material}</h2>
 <p>Color: ${item.color}</p>
 <img src="${item.image}" alt="">`
    : `<h2>Oh, noes!</h2>
 <p>No item found</p>`;

  // render the result
  document.getElementById('result').innerHTML = result;
}

function getItem(size) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].size === size) {
      return items[i];
    }
  }
  // if we didn't find anything
  return null;
}