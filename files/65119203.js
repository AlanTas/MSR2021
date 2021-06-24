foreach(var item in Model){
  <form>
    <input type="text" id="id" name="id" value="item.id"/>
    <input type="button" class="btn" data-id="item.id" name="submit" value="Delete"/>
  </form>
}

<script>
  $(".btn").click(function(){
    // alert the id value
    alert($(this).attr("data-id"))
  });
</script>
