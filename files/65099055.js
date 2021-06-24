<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <input id="mail" type="text" name="email" value="user@example.com">
    <button id="btn" onclick="abc()">click On me</button>

    <p id='text'></p>

    <script>
        function abc() {
            var mail = document.getElementById('mail');
            var text = document.getElementById('text');
            text.innerText = mail.value;
        }
    </script>

</body>
</html>