//when tr is clicked
$(document).on("click", "#report tr.odd", function() {
  //get month 
  var mnth = $(this).find("td:eq(0)").text().trim().split("-")[1]
  //loop thorough tr to find same month tr
  $("tbody >  tr").not(this).each(function() {
    var mnth_other = $(this).find("td:eq(0)").text().trim().split("-")[1]
    if (mnth == mnth_other) {
      $(this).toggle();
      $(this).find(".arrow").toggleClass("up");
    }

  });
});
var date_current;
//loop through tr
$("tbody >  tr").each(function() {
  //get month
  var dates = $(this).find("td:eq(0)").text().trim().split("-")[1];
  //check if not equal
  if (date_current != dates) {
    $(this).addClass("odd");
    $(this).find(".arrow").addClass("down");
    date_current = dates;
  } else {
    //hide other tr
    $(this).hide()
  }

})
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<table id="report" class="table table-striped table-bordered table-sm text-center" style="width:35%; margin:auto;">

  <thead class="text-center table-info">
    <tr>
      <th>Date</th>
      <th>Calls</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>

    <tr class="text-center">
      <td id="id">
        27-11-2020
      </td>
      <td id="database">
        22
      </td>
      <td id="total">
        1
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>
    <tr class="text-center">
      <td id="id">
        27-11-2020
      </td>
      <td id="database">
        22
      </td>
      <td id="total">
        1
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>
    <tr class="text-center">
      <td id="id">
        21-11-2020
      </td>
      <td id="database">
        22
      </td>
      <td id="total">
        12
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>
    <tr class="text-center">
      <td id="id">
        20-12-2020
      </td>
      <td id="database">
        222
      </td>
      <td id="total">
        21
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>
    <tr class="text-center">
      <td id="id">
        27-12-2020
      </td>
      <td id="database">
        22
      </td>
      <td id="total">
        1
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>
    <tr class="text-center">
      <td id="id">
        27-12-2020
      </td>
      <td id="database">
        22
      </td>
      <td id="total">
        1
      </td>
      <td>
        <div class="arrow"></div>
      </td>
    </tr>

  </tbody>
</table>