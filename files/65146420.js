$('input:radio[name="date-range"]').on('change', function () {

    alert("test: " + $(this).val());

    switch ($(this).val()) {
        case '30-days':
            //ajax GET function
            break;

        case '60-days':
            //ajax GET function
            break;

        case '90-days':
            //ajax GET function
            break;
    }
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<ul class="choose-date-range">
    <li>
        <input type="radio" id="30-days" name="date-range" value="30-days">
        <label for="30-days">30 days</label>
    </li>
    <li>
        <input type="radio" id="60-days" name="date-range" value="60-days">
        <label for="60-days">60 days</label>
    </li>
    <li>
       <input type="radio" id="90-days" name="date-range" value="90-days">
       <label for="90-days">90 days</label>
    </li>
</ul>