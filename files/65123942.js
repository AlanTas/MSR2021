function TableRow() {

  const rows = document.querySelectorAll('table tr[data-url]');

  rows.forEach(row => {
    row.addEventListener('click', function(e) {
      handleClick(row, e);
    });
  });

  function handleClick(row, e) {
    let url = row.getAttribute('data-url');
    window.document.location = url;
  }

  const anchors = document.querySelectorAll('table tr[data-url] a');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

}

document.addEventListener('DOMContentLoaded', TableRow);
