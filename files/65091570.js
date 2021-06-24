//on change of select or checkbox
$('select ,input[type=checkbox] ').on('change', function() {
  var selector = $(this).closest("tr")//get closest tr
  //if checkbox is checked
  if (selector.find("input[type=checkbox]").is(":checked")) {
  //get select valus
    var prcs_type = selector.find("select[name=processing_type]").val();
    var no_person = selector.find("select[name=no_of_person]").val();
    var total = prcs_type * no_person;
    selector.find(".package_price").text(total)//add value to package_prcie.
  }
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js"></script>
<table>
  <tr class="valid-container">
    <td style="cursor:pointer;">
      <input type="checkbox" name="c1" id="c1">1
    </td>

    <td height="52">
      <select class="custom-select processing_type" name="processing_type" data-id="1" required>
        <option value="19" selected>Normal</option>
        <option value="20">Express</option>
      </select>
    </td>

    <td height="52">
      <select class="custom-select no_of_person" name="no_of_person" data-id="1" required>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

    </td>

    <td width="190" height="60">
      <div class="input-group date" data-date-format="dd.mm.yyyy">
        <div class="input-group mb-2">
          <input type="text" class="form-control" name="travel_date" id="date" placeholder="dd.mm.yyyy">
          <div class="input-group-text"><i class="ti-calendar"></i></div>
          <div class="input-group-addon">
          </div>
          <div class="input-group-prepend">
          </div>
        </div>
      </div>

    </td>
    <td>{{ j.currency_type }}&nbsp;&nbsp; <output name="result" class="package_price">{{ j.price }}</output>.00</td>

  </tr>
  <tr class="valid-container">
    <td style="cursor:pointer;">
      <input type="checkbox" name="c1" id="c1">2
    </td>

    <td height="52">
      <select class="custom-select processing_type" name="processing_type" data-id="2" required>
        <option value="19" selected>Normal</option>
        <option value="20">Express</option>
      </select>
    </td>

    <td height="52">
      <select class="custom-select no_of_person" name="no_of_person" data-id="2" required>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

    </td>

    <td width="190" height="60">
      <div class="input-group date" data-date-format="dd.mm.yyyy">
        <div class="input-group mb-2">
          <input type="text" class="form-control" name="travel_date" id="date" placeholder="dd.mm.yyyy">
          <div class="input-group-text"><i class="ti-calendar"></i></div>
          <div class="input-group-addon">
          </div>
          <div class="input-group-prepend">
          </div>
        </div>
      </div>

    </td>
    <td>{{ j.currency_type }}&nbsp;&nbsp; <output name="result" class="package_price">{{ j.price }}</output>.00</td>

  </tr>

</table>