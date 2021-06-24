<div class="row">
    <form>
        <label class="radio-inline">
            <input type="radio" name="optradio" value="notspecific" checked>&nbsp;Latest Available Semester
        </label>

        <label class="radio-inline">
            <input type="radio" name="optradio" value="specific">&nbsp;Specific Semester
        </label>
        <select id="dropdown" >
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
        </select>
    </form>
</div>
<!-- jQuery -->
<script
  src="http://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
<script>

$(document).ready(function(){
    // hidden at init
    $('#dropdown').hide();
    $('input[type="radio"]').click(function(){
    // test the value of radio button to decide to show or hide the dropdown
        if ($(this).val() == 'specific') {
            $('#dropdown').show();
        }
        else{
            $('#dropdown').hide();
        };
    });
});

</script>
