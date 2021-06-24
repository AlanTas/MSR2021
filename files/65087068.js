<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/libphonenumber-js@^1.7.6/bundle/libphonenumber-min.js"></script>
</head>

<body>
    <label for="inputContactNumber">Contact Number</label>
        <div class="input-group mb-3">
            <div class="input-group-prepend">

        
            <select class="select-country" class="btn contact-btn dropdown-toggle">
            </select>
        </div>
        <input class="input-phone phone-format" class="form-control phone-format" type="text" name="contactNo" placeholder="Enter contact number" required//>
    </div>


<script type="text/javascript">

    const countries = libphonenumber.getCountries();
    const optionList = countries.map( country => `<option>${country}</option>` );
    $(".select-country").html( optionList );

    $(".phone-format").keyup(function () {
        const val_old = $(this).val();
        const newString = new libphonenumber.AsYouType($(".select-country").val()).input(val_old);
        $(this).focus().val(newString);
    });
</script>


</body>
</html>