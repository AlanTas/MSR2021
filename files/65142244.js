<!doctype html>
<html>

<head>
  <title>Load images</title>
  <script>
    function myFunction(numImages) {
      const html = Array.from(Array(numImages).keys()).slice(1).map(key => {
        const id = String(key).padStart(2, '0');
        return `<div class='col-sm-4 more crop col-xs-6 col-md-3 col-lg-3'>
    <a class="thumbnail fancybox" rel="ligthbox" href="images/image${id}.jpg">
      <img class="img-responsive" alt="" src="images/image${id}.jpg" title="Here would be image${id}" />Here would be img ${id}
    </a>
  </div>`
      })
      document.querySelector('#images').innerHTML = html.join("");
    }

    window.addEventListener("load", function() {
      myFunction(5); /* change to 50 when you are happy */
    });

  </script>
</head>

<body>
  <div id="images"></div>
</body>