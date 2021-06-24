<!DOCTYPE html>
<html>
<head>
    <script>
        var timerid;
        var secs = 30;
        var randomNumber;
        var mclics = 0;
        var mcorrect = 0;



        function begin() {
            randomNumber = Math.round(Math.random() * 9);

            var atable = document.getElementById("atable");
            for (i = 0; i < atable.rows.length; i++) {
                for (j = 0; j < atable.rows[i].cells.length; j++) {
                    var a = Math.ceil(Math.random() * 100);
                    atable.rows[i].cells[j].innerHTML = a;

                    // NEW CODE LINE
                    atable.rows[i].cells[j].addEventListener("click", function () {
                        getNumbers(this.innerText);
                        this.removeEventListener("click", arguments.callee);
                    });
                    // END NEW CODE LINE
                }
            }

        }

        function check(trgt) {
            if (trgt.tagName == "TD") {
                mclics++
                trgt.onclick = false;                 //for not happen again click//
                if ((trgt.innerHTML % randomNumber) == 0) {
                    mcorrect++                          //right clicks
                    trgt.style.backgroundColor = "green";
                }
                else {
                    trgt.style.backgroundColor = "red";
                }
            }

        }

        // NEW CODE LINE
        function getNumbers(x) {
            var target = document.getElementById('second').getElementsByTagName('td');
            for (var i = 0; i < target.length; i++) {
                if (target[i].innerText.length === 0) {
                    target[i].innerText = x;
                    break;
                }
            }
        }
        // END NEW CODE LINE

    </script>
</head>

<body>
    <input type="button" value="Start" onclick="begin()" style="width: 30%"><br>
    <p id="anumber"></p>
    <table id="atable" border="1" onclick="check(event.target)">
        <tr>
            <td style="width: 292px; height: 39px;"> </td>
            <td style="width: 332px; height: 39px;"></td>
            <td style="width: 260px; height: 39px;">

        </tr>
        <tr>
            <td style="width: 292px; height: 46px;"></td>
            <td style="width: 332px; height: 46px;"></td>
            <td style="width: 260px; height: 46px;">
        </tr>
        <tr>
            <td style="width: 292px; height: 172px;"></td>
            <td style="width: 332px; height: 172px;"></td>
            <td style="width: 260px; height: 172px;">
        </tr>

    </table>

    <p>Remaining time: </p>
    <p id="atimer"></p>

    <table id="second" border="1">
        <tr>
            <td style="width: 292px; height: 39px;"> </td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>

        <tr>
            <td style="width: 292px; height: 46px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 46px;"></td>
        </tr>

        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>

    </table>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <script>
        var timerid;
        var secs = 30;
        var randomNumber;
        // var mclics = 0;
        var mcorrect = 0;

        function begin() {

            // NEW CODE LINE
            mcorrect = 0;

            var tableA = document.getElementById('atable').getElementsByTagName('td');
            for (var i = 0; i < tableA.length; i++) {
                tableA[i].style.backgroundColor = '';
                tableA[i].removeEventListener("click", getClick);
            }

            var tableB = document.getElementById('second').getElementsByTagName('td');
            for (var i = 0; i < tableB.length; i++) {
                tableB[i].innerText = '';
            }
            // END NEW CODE LINE

            randomNumber = Math.round(Math.random() * 9);

            var atable = document.getElementById("atable");
            for (i = 0; i < atable.rows.length; i++) {
                for (j = 0; j < atable.rows[i].cells.length; j++) {
                    var a = Math.ceil(Math.random() * 100);
                    atable.rows[i].cells[j].innerHTML = a;

                    // NEW CODE LINE
                    atable.rows[i].cells[j].addEventListener("click", getClick);
                    // END NEW CODE LINE
                }
            }

        }

        // function check(trgt) {
        //     if (trgt.tagName == "TD") {
        //         mclics++
        //         trgt.onclick = false;                 //for not happen again click//
        //         if ((trgt.innerHTML % randomNumber) == 0) {
        //             mcorrect++                          //right clicks
        //             trgt.style.backgroundColor = "green";
        //         }
        //         else {
        //             trgt.style.backgroundColor = "red";
        //         }
        //     }
        // }

        // NEW CODE LINE
        function getClick() {
            getNumbers(this.innerText, this);
            this.removeEventListener("click", getClick);
        }

        function getNumbers(x, y) {

            if ((y.innerHTML % randomNumber) == 0) {
                mcorrect++                          //right clicks
                y.style.backgroundColor = "green";
            }
            else {
                y.style.backgroundColor = "red";
            }

            var target = document.getElementById('second').getElementsByTagName('td');
            for (var i = 0; i < target.length; i++) {
                if (target[i].innerText.length === 0) {
                    target[i].innerText = x;
                    break;
                }
            }
        }
        // END NEW CODE LINE

    </script>
</head>

<body>
    <input type="button" value="Start" onclick="begin()" style="width: 30%">
    <br>

    <p id="anumber"></p>
    <table id="atable" border="1">
        <tr>
            <td style="width: 292px; height: 39px;"> </td>
            <td style="width: 332px; height: 39px;"></td>
            <td style="width: 260px; height: 39px;">

        </tr>
        <tr>
            <td style="width: 292px; height: 46px;"></td>
            <td style="width: 332px; height: 46px;"></td>
            <td style="width: 260px; height: 46px;">
        </tr>
        <tr>
            <td style="width: 292px; height: 172px;"></td>
            <td style="width: 332px; height: 172px;"></td>
            <td style="width: 260px; height: 172px;">
        </tr>

    </table>

    <p>Remaining time: </p>
    <p id="atimer"></p>

    <table id="second" border="1">
        <tr>
            <td style="width: 292px; height: 39px;"> </td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>

        <tr>
            <td style="width: 292px; height: 46px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 46px;"></td>
        </tr>

        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>
        <tr>
            <td style="width: 332px; height: 39px;"></td>
        </tr>

    </table>
</body>
</html>