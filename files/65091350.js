async function getValuesWithAjax() {
  return ["test1", "test2", "test3"];
}

$(function() {

  getValuesWithAjax().then(values => {
    values.forEach(value => {
      $(".selectpicker").append($("<option>")
        .val(value)
        .html(value)
      );
    });
  });


  $('.selectpicker').on('change', function() {
    selectedServices = $(this).val();
    alert(selectedServices)
  });
});