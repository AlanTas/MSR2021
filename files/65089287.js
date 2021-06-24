const products = [{
    id: "A32S",
    title: "Car"
  },
  {
    id: "D12E",
    title: "Rabbit"
  },
  {
    id: "A33S",
    title: "Ghost"
  },
  {
    id: "34SC",
    title: "Apple"
  },
];

const newProducts = [{
    id: "A32S",
    title: "Ferrari"
  },
  {
    id: "D12E",
    title: "Rabbit"
  },
  {
    id: "A33S",
    title: "Ghost"
  }
]

const changes = [];

function hasSameValue(product, otherProduct, key) {
  return product[key] === otherProduct[key];
}

function exists(product, productArray) {
  for (const existingProduct of productArray) {
    if (hasSameValue(product, existingProduct, "id")) return true;
  }
  return false;
}

function getExistingProduct(id, productArray) {
  for (const product of productArray) {
    if (product.id === id) return product;
  }
}

for (const product of newProducts) {
  if (exists(product, products)) {
    const existingProduct = getExistingProduct(product.id, products);
    if (!hasSameValue(product, existingProduct, "title")) {
      changes.push(product);
    }
  }
}

for (const product of products) {
  if (!exists(product, newProducts)) {
    changes.push({
      id: product.id,
      removed: true
    });
  }
}

console.log(changes);