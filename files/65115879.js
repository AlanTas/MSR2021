<html>

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

  <style>
    td {
      cursor: pointer;
    }
  </style>
</head>

<body>
  <table id="myTable">
    <tr>
      <th>Head Row</th>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
      <th>Four</th>
      <th>Five</th>
    </tr>
    <tr>
      <th>Title 1</th>
      <td>10<span class="spanClass"></span></td>
      <td>9<span class="spanClass"></span></td>
      <td>5<span class="spanClass"></span></td>
      <td>3<span class="spanClass"></span></td>
      <td>2<span class="spanClass"></span></td>
      <td>1<span class="spanClass"></span></td>
    </tr>
    <tr>
      <th>Title 2</th>
      <td>25<span class="spanClass"></span></td>
      <td>19<span class="spanClass"></span></td>
      <td>16<span class="spanClass"></span></td>
      <td>15<span class="spanClass"></span></td>
      <td>10<span class="spanClass"></span></td>
      <td>2<span class="spanClass"></span></td>
    </tr>
  </table>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script>
    window.onload = function() {
      $('#myTable tr td:not(:nth-child(2))').on('click', function() {
        // clear all span
        $('.spanClass').html('');

        // $(this) is your clicked td
        var $tr = $(this).parent('tr');
        var firstCell = $tr.find("td:first").text();
        var didIt = (this.innerText - firstCell);

        $(this).find('.spanClass').html(didIt);
      });
    }
  </script>

</body>

</html>