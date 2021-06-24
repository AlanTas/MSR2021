<input type="button" class="btn btn-sm btn-w1" name="txtval" id="txtval">
<select class="lbbg selsm-2 inblock-2 " name="rupeeitems" id="rupeeitems">
  <option value="">Select</option>
  <option value="RUB Dollar">RUB</option>
  <option value="AFN Dinaar">AFN</option>
  <option value="EUR Dollar">EUR</option>
</select>

<!-- This one is working properly -->
<input type="button" class="btn btn-sm btn-w1" name="txtprice" id="txtprice">
<select class="lbbg selsm-2 inblock-2 " name="cmbitems" id="cmbitems">
  <option value="">Select</option>
  <option value="USD Dollar">USD</option>
  <option value="Euro Dollar">EUR</option>
  <option value="Aud Dollar">AUD</option>
  <option value="Bahrien ">BHD</option>
</select>
<script>
  var selectRupee = document.getElementById('rupeeitems');
  var inputRupee = document.getElementById('txtval');
  selectRupee.onchange = function() {
    inputRupee.value = this.value;
  }

  var selectCmb = document.getElementById('cmbitems');
  var inputCmb = document.getElementById('txtprice');
  selectCmb.onchange = function() {
    inputCmb.value = this.value;
  }
</script>