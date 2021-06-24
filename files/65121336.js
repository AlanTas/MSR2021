$(function() { // on page load
  $('#removeactive').on('click', function(e) {
    e.preventDefault();
    var message = $(this).data('confirm');

    //pop up
    swal({
        title: "Are you sure ??",
        text: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(function(isConfirm) {
        console.log("confirmed?", isConfirm);
        if (isConfirm) console.log("deleting"); // here you delete
        else console.log("cancelled"); // here you do whatever or nothing
        // You cannot return anything  
      });
  });
})