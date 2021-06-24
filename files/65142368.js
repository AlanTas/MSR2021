const shelf = [{
  "categoryPrice": "2",
  "categoryTitle": "Flyer",
  "articleList": [{
    "id": "1",
    "articleTitle": "Green",
  }, {
    "id": "2",
    "articleTitle": "Blue",
  }],
}, {
  "categoryPrice": "3",
  "categoryTitle": "Post card",
  "articleList": [{
    "id": "3",
    "articleTitle": "Purple"
  }, {
    "id": "4",
    "articleTitle": "Yellow",
  }]
}]

const findItem = function(shelves, id) {
  return shelves.flatMap((shelf) => shelf.articleList).find((article) => article.id == id) || null;
}

console.log(findItem(shelf, 1));
console.log(findItem(shelf, 3));