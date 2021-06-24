<form id="regForm" name="regForm" action="[NEED ACTION]" class="col-sm-6">
    ...
    <div style="overflow:auto;">
        <div style="float:right;">
            <button type="button" id="prevBtn" click="nextPrev(-1)">Previous</button>
            <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
            <submit type="submit" class="hide" value="Submit" />
        </div>
    </div>
</form>

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").classList.add('hide');
        document.getElementById("submitBtn").classList.remove('hide');
    } else {
        document.getElementById("nextBtn").classList.remove('hide');
        document.getElementById("submitBtn").classList.add('hide');
    }

    fixStepIndicator(n)
}

function showTab(n) {

    var x = document.getElementsByClassName("tab");
    var nextSubmitBtn = document.getElementById("nextBtn");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        nextSubmitBtn.textContent = "Submit";
        nextSubmitBtn.onClick = someSubmitFunc;
    } else {
        nextSubmitBtn.textContent = "Next";
        nextSubmitBtn.onClick = function () { nextPrev(1); };
    }

    fixStepIndicator(n)
}
