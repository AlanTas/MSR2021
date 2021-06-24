const jsonFile = { 
    "photographers": [
        {
            "name": "jonna",
            "id": 125,
            "city": "paris",
            "country": "UK",
            "tags": ["portrait", "events", "travel", "animals"],
            "tagline": "Doing my best",
            "price": 400,
            "portrait": "MimiKeel.jpg"
        }
     ]
};


var cardsection = document.getElementsByClassName("cardsection")[0];

var items = jsonFile;
console.log(items.photographers.length);

for(var i = 0; i < items.photographers.length; i++) {
  
  var card = document.createElement("div");
  card.classList.add('card');
  card.setAttribute("aria-label", "Photographe card");
  cardsection.appendChild(card);
  
  var photoandname = document.createElement("div");
  photoandname.classList.add('photoandname');
  photoandname.setAttribute("aria-label", "Profil photo and name section");
  photoandname.innerHTML = items.photographers[i].portrait;
  card.appendChild(photoandname);
  
  var profilphoto = document.createElement("img");
  profilphoto.src = items.photographers[i].portrait;
  profilphoto.alt = "Photographer's profil image";
  profilphoto.classList.add('profilphoto');
  photoandname.appendChild(profilphoto);
  
  var photographerName = document.createElement("H2");
  photographerName.classList.add('name');
  photographerName.textContent = items.photographers[i].name;
  photoandname.appendChild(photographerName);
  
  var informations = document.createElement("div");
  informations.classList.add('informations');
  card.appendChild(informations);
  
  var caption = document.createElement("p");
  caption.classList.add('caption');
  caption.textContent = items.photographers[i].tagline;
  informations.appendChild(caption);
  
  var price = document.createElement("p");
  price.classList.add('price');
  price.innerHTML = items.photographers[i].price; 
  informations.appendChild(price);
  
  var tags = document.createElement("div");
  tags.classList.add('tags');
  
    var tagItems = items.photographers[i].tags;
  console.log(tagItems)
  for(var j = 0; j < tagItems.length; j++) {
    
    var tagButton = document.createElement('button');
    tagButton.classList.add('tagButton');
    tagButton.id = tagItems[j]; /*ID needs to be the tag itself for a further filter functionality*/
    tagButton.textContent = tagItems[j]; /*And setting the innerhtml of the button as the tag itself*/
    tags.appendChild(tagButton);

  }   
  card.appendChild(tags);
}
