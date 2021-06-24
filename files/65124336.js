var data = {
  "modules": [{
    "name": "mod1",
    "description": "mod1 description",
  }, {
    "name": "mod2",
    "description": "mod2 description",
  }, {
    "name": "mod3",
    "description": "mod3 description",
  }]
}

jQuery($ => {
  $.each(data.modules, function(i, field) {
    let $li = $(`<li><div>Name: ${field.name}</div><div>Description: ${field.description}</div></li>`).appendTo('#moduleList');
    $('<input class="set_inputs" type="button" value="select" />').data('field', field).wrap('<div />').parent().appendTo($li);
  });


  $('#moduleList').on('click', '.set_inputs', e => {
    let $button = $(e.currentTarget);
    console.log($button.data('field'));
    
    // Uncomment these two lines in your production version. They are only commented 
    // here as they cause issues within SO snippets
    //localStorage.setItem('moduleObj', JSON.stringify($button.data('field')));
    //window.location.href = 'select_inputs.html';
  });
});