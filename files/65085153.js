<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Js Check</title>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" language="javascript"></script>
</head>

<body>
<div id="wrapper">
  <form id="ratingForm" method="POST">
    <div class="form-group">
      <h4>Rate this product</h4>
      <!-- Start Star -->
      <button type="button" class="btn btn-warning btn-sm rateButton" aria-label="Left Align"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> </button>
      <button type="button" class="btn btn-default btn-grey btn-sm rateButton" aria-label="Left Align"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> </button>
      <button type="button" class="btn btn-default btn-grey btn-sm rateButton" aria-label="Left Align"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> </button>
      <button type="button" class="btn btn-default btn-grey btn-sm rateButton" aria-label="Left Align"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> </button>
      <button type="button" class="btn btn-default btn-grey btn-sm rateButton" aria-label="Left Align"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> </button>
      <!-- End Star -->
      
      <input type="hidden"  id="rating" name="rating" value="1">
      <input type="hidden"  id="itemId" name="itemId" value="<?php echo $_GET['id']; ?>">
      <input type="hidden" name="action" value="saveRating">
    </div>
    <div class="form-group"> 
      <!--Comment Start-->
      <label for="usr">Title*</label>
      <input type="text"  id="title" name="title" required>
    </div>
    <div class="form-group">
      <label for="comment">Comment*</label>
      <textarea rows="5" id="comment" name="comment" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-info" id="saveReview">Save Review</button>
    </div>
    <!--Comment End-->
  </form>
</div>
<script>
jQuery(document).ready(function($) {
        
        $('#ratingForm').on('submit', function(event){
          event.preventDefault();
          event.stopImmediatePropagation();
            var formData = $(this).serialize();
            $.ajax({
                type : 'POST',
                dataType: "json",   
                url : 'action.php',                 
                data : formData,
                success:function(response){
                console.log(response);
                    if(response.success == 1) {
                        $("#ratingForm")[0].reset();
                        window.location.reload();
                    } 
                }
            }); 
        });
});
</script>
</body>
</html>
