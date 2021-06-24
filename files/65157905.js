$('input[type=checkbox] ').on('change', function() {
  $('tbody > tr .checkbox').not(this).prop('checked',false);//remove checked from other checkbox
  //loop thrugh trs
  $("tbody > tr").each(function() {
//add or remove name attribute
   var selector = $(this)
    if (selector.find('input[type=checkbox]').prop("checked") == true) {
      selector.find('.visa_type').attr('name', 'visa_type');
      selector.find(".processing_type").attr('name', 'processing_type');
      selector.find('.travel_date').attr('name', 'travel_date');

    } else if (selector.find('input[type=checkbox]').prop("checked") == false) {
      selector.find('.visa_type').attr('name', '');
      selector.find(".processing_type").attr('name', '');
      selector.find('.travel_date').attr('name', '');

    }
  })

});
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<table class="table  table-bordered table-responsive" id="flip-scroll">
  <thead>
    <tr>
      <th scope="col">Visa Option</th>
      <th scope="col">Processing Type</th>
      <th height="60" scope="col">Travel Date</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>


    <tr class="valid-container">
      <input type="hidden" class="id" value="1">
      <td style="cursor:pointer;" width="200"><input type="checkbox" name="c1" class="checkbox">&nbsp; <output class="visa_type" style="font-size:14.5px !important;" value="90 days single visa">90 days single visa</output></td>

      <td height="52" width="158">
        <select class="custom-select processing_type" required="">
          <option value="15000" selected="">Normal</option>
          <option value="20000">Express</option>
        </select>
      </td>


      <td width="190" height="60">

        <div class="input-group date" data-date-format="dd.mm.yyyy">
          <div class="input-group mb-2">
            <input type="text" class="form-control travel_date" value="dd.mm.yyyy" placeholder="dd.mm.yyyy">
            <div class="input-group-text"><i class="ti-calendar"></i></div>
            <div class="input-group-addon">
            </div>
            <div class="input-group-prepend">
            </div>
          </div>
        </div>

      </td>

      <td width="166">AED&nbsp;&nbsp; <output class="package_price">15000</output>.00</td>

    </tr>

    <tr class="valid-container">
      <input type="hidden" class="id" value="2">
      <td style="cursor:pointer;" width="200"><input type="checkbox" name="c1" class="checkbox">&nbsp; <output class="visa_type" style="font-size:14.5px !important;" value="30 days">30 days</output></td>

      <td height="52" width="158">
        <select class="custom-select processing_type" required="">
          <option value="11" selected="">Normal</option>
          <option value="22">Express</option>
        </select>
      </td>


      <td width="190" height="60">

        <div class="input-group date" data-date-format="dd.mm.yyyy">
          <div class="input-group mb-2">
            <input type="text" class="form-control travel_date" value="dd.mm.yyyy" placeholder="dd.mm.yyyy">
            <div class="input-group-text"><i class="ti-calendar"></i></div>
            <div class="input-group-addon">
            </div>
            <div class="input-group-prepend">
            </div>
          </div>
        </div>

      </td>

      <td width="166">AED&nbsp;&nbsp; <output class="package_price">11</output>.00</td>

    </tr>

    <tr class="valid-container">
      <input type="hidden" class="id" value="3">
      <td style="cursor:pointer;" width="200"><input type="checkbox" name="c1" class="checkbox">&nbsp; <output class="visa_type" style="font-size:14.5px !important;" value="90 days">90 days</output></td>

      <td height="52" width="158">
        <select class="custom-select processing_type" required="">
          <option value="22" selected="">Normal</option>
          <option value="33">Express</option>
        </select>
      </td>


      <td width="190" height="60">

        <div class="input-group date" data-date-format="dd.mm.yyyy">
          <div class="input-group mb-2">
            <input type="text" class="form-control travel_date" value="dd.mm.yyyy" placeholder="dd.mm.yyyy">
            <div class="input-group-text"><i class="ti-calendar"></i></div>
            <div class="input-group-addon">
            </div>
            <div class="input-group-prepend">
            </div>
          </div>
        </div>

      </td>

      <td width="166">AED&nbsp;&nbsp; <output class="package_price">22</output>.00</td>

    </tr>


  </tbody>
</table>