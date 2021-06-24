window.onload = function() {
var tr = document.querySelectorAll('#productTable tbody tr');

Array.from(tr).forEach(function(trArray, index) {
  var button = document.createElement('button');
  var th = document.createElement('th');
  button.innerText = 'buy';
  button.className = 'btn_buy';
  th.append(button);
  tr[index].append(th);    
});
}
<table id="productTable" class="table table-bordered table-condensed table-striped">
 <thead>
   <tr>
      <th>Product Name</th>
      <th>Description</th>
      <th>Price</th>
   </tr>
 </thead>

 <tbody>
   <tr>
      <th>Soap</th>
      <th>good for babies</th>
      <th>75</th>
   </tr>
   
   <tr>
      <th>Milk</th>
      <th>manufactured</th>
      <th>100</th>
   </tr>
   
    <tr>
      <th>Rice</th>
      <th>red rice 1kg pack</th>
      <th>130</th>
   </tr>
 </tbody>
</table>