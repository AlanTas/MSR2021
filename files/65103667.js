<html>

<head>
    <title>
        Change Css
    </title>
    <script lang="javascript">
        function colorChanger() {
            var len = document.getElementById("string").value.length;
            if (len < 50) {
                swapStyleSheet("first_50.css");
            } else if (len > 50 && len < 100) {
                swapStyleSheet("second_100.css");
            }
        }

        function swapStyleSheet(strName) {
            document.getElementById("cssChanger").href = strName;
        }
    </script>
    <link href="first_50.css" id="cssChanger" />
</head>

<body>
    <input type="text" id="string" value=""></input>
    <input type="button" id='style1' value="Change Css" onclick="javascritpt:colorChanger();">
</body>

</html> ````
