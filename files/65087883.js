<input type="number" id="field1" onfocusout="validateField(0, 100, 'field1')"/><br/><br/>
    <input type="number" id="field2" onfocusout="validateField(200, 300, 'field2')"/><br/><br/>
    <input type="number" id="field3" onfocusout="validateField(400, 500, 'field3')"/><br/><br/>
    <script>
        function validateField(min, max, id) {
            const value = document.getElementById(id).value;
            if (value < min || value > max) {
                document.getElementById(id).style.borderColor = "red";
            }
            else {
                document.getElementById(id).style.borderColor = "lime";
            }
        }
    </script>