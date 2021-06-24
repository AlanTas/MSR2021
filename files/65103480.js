<html>
<head>
    <style>

        .image1 {
            position: relative;
            border: 1px solid red;
        }

        .image2 {
            position: absolute;
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <img class="image2"  src="https://via.placeholder.com/150" onclick="myFunction(this)">
    <img class="image2"  src="https://via.placeholder.com/170" onclick="myFunction(this)">
    <img class="image2"  src="https://via.placeholder.com/190" onclick="myFunction(this)">
    <img class="image2"  src="https://via.placeholder.com/210" onclick="myFunction(this)">
    <img class="image1"  src="https://via.placeholder.com/230" onclick="myFunction(this)">
</body>
<script>
    function myFunction(img) {
        img.style.display = "none";
    }
</script>

</html>