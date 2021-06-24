<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <script>
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (!(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))) //If not IE, load d3 script
        {
            document.write('<script src="scripts/d3.js"><\/script>');
        } 
    </script>
</head>
<body>
    <svg>
        <circle class="target" style="fill: #69b3a2" stroke="black" cx=50 cy=50 r=40></circle>
    </svg>
    <script>
        if (window.d3) {
            d3.select(".target").style("stroke-width", 8);
        }
        else {
            alert("IE");
        }
    </script>
</body>
</html>
