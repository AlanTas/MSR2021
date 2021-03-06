.form {
  // use relative on your form

  position: relative;
}
.overlay {
  position: absolute;

  // this will stretch overlay to fill width and height of form
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1); // some transparent grey color
}

.spinner {
  position: absolute;

  // this will place spinner in center of form
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
