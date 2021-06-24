const objectFruits = [{
    fruits: 'apple'
  },
  {
    fruits: 'banana'
  },
  {
    fruits: 'strawberry'
  },
  {
    fruits: 'manggo'
  },
];

const objectMyFavorite = [{
    fruits: 'apple'
  },
  {
    fruits: 'apple'
  },
  {
    fruits: 'banana'
  },
];

const getAllFruits = {
  fruits: objectFruits.map(item => item.fruits)
}
const getAllMyFavorite = {
  fruits: objectMyFavorite.map(item => item.fruits)
}

let myView = '';

for (let i = 0; i < getAllFruits['fruits'].length; i++) {
  const nameFruits = getAllFruits['fruits'][i];
  const filterMyFavorite = getAllMyFavorite['fruits'].filter(function(fruitss) {
    return fruitss == nameFruits
  });
  // and how I delete the empty and just show array if value is not null and show it to user

    if (filterMyFavorite.length > 0){
      myView += `<p>${filterMyFavorite}</p>`
   }
}

document.getElementById("test").innerHTML = myView
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>test</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id="test">

  </div>
  <script src="script.js"></script>
</body>

</html>