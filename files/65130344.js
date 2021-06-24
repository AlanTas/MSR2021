$('ul.nav').on('click', '.nav-item:contains("Support")', function(e) {
  console.log('clicked');
  //do something else
});
$('button').click(function(e) {
  $('ul.nav').append(`<li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#@n.href" role="tab" aria-selected="true" id="@n.aId">
                        ${Math.random() < 0.5 ? 'something else' : 'Support'}
                    </a>
                </li>`);
});