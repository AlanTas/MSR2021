var captions = new Array(14);

captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]"; 
captions[3]="The Atlantis approaches the ISS [2000]"; 
captions[4]="The Atlantis approaches the ISS [2000]"; 
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

var htmlCode = "";

for (var i = 0; i <= 13; i++) {
  htmlCode += "<figure>";
  htmlCode += "<img alt=' ' src='slide" + i + ".jpg' />";
  htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
  htmlCode += "</figure>";
}

document.getElementById("gallery").innerHTML = htmlCode;

// Instead of explicit array declaration with an array size, you can
// just use implicit array declaration and the size will be determined
// by how many things you put in it.
var captions = [
  "International Space Station fourth expansion [2009]",
  "Assembling the International Space Station [1998]",
  "The Atlantis docks with the ISS [2001]",
  "The Atlantis approaches the ISS [2000]",
  "The Atlantis approaches the ISS [2000]",
  "International Space Station over Earth [2002]",
  "The International Space Station first expansion [2002]",
  "Hurricane Ivan from the ISS [2008]",
  "The Soyuz spacecraft approaches the ISS [2005]",
  "The International Space Station from above [2006]",
  "Maneuvering in space with the Canadarm2 [2006]",
  "The International Space Station second expansion [2006]",
  "The International Space Station third expansion [2007]",
  "The ISS over the Ionian Sea [2007]"
];

// Create a new "wrapper" element which will hold the other dynamically
// created elements
var wrapper = document.createElement("div");

// Instead of a counting for loop, you can use Array.forEach(), which
// removes the need for you to set up and manage a loop counter
captions.forEach(function(caption, index){
  // You should really avoid string manipulations in a loop, which
  // can be costly in terms of performance. Also, when creating new
  // DOM elements, you should use the DOM API for better control and
  // to eliminate having to concatenate strings.
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");

  // Configure the new element properties
  img.alt = " ";
  img.src = "slide" + index + ".jpg";
  figcaption.textContent = caption;

  // Put the image and figcaption in the figure
  figure.appendChild(img);
  figure.appendChild(figcaption);

  // Append the figure to the wrapper
  wrapper.appendChild(figure);
});

// Now, append the wrapper to the main document
document.getElementById("gallery").appendChild(wrapper);
