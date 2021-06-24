function passTeste(arg) {

  const element = document.querySelector("#mainImage-teste-js > div")

  const transformValue = window.getComputedStyle(element).transform;
  const w = window.getComputedStyle(element).width;
  var matrix = new WebKitCSSMatrix(transformValue);

  console.log(w);
  console.log(matrix.m41);
  console.log(matrix.m41/parseInt(w)*100+"%");

}
.container {
  width: 200px;
  overflow: hidden;
}

.product__image--mainImage {
  display: flex;
  transition: 2s;
  transform: translate(-200%);
}

.product__image--mainImage img {
  max-width: 100%;
}

.container>p {
  display: flex;
  justify-content: space-between;
  font-size: 45px;
  cursor: pointer;
}