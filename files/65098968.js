const sharp = require("sharp");

const originalFilename = "image.jpg";


const image = sharp(originalFilename);

// this is just a placeholder
const imageWidth = 500;

image
  .extract({ left: 0, top: 0, width: imageWidth, height: 25000 })
  .toFile("top.jpg", function(err) {
    // Save the top of the image to a file named "top.jpg"
  });

image
  .extract({ left: 0, top: 25000, width: imageWidth, height: 25000 })
  .toFile("bottom.jpg", function(err) {
    // Save the bottom of the image to a file named "bottom.jpg"
  });
