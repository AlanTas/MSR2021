<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form name="fv">
    <table>
        <tr><td colspan="3"><b>Enter Investment Information:</b></td></tr>
        <tr>
            <td>1)</td>
            <td>Amount of the Investment (any currency):</td>
            <td>
                <input type="text" name="investment" size="12"
                       onchange="calculate();">
            </td>
        </tr>
        <tr>
            <td>2)</td>
            <td>percentage rate of interest:</td>
            <td>
                <input type="text" name="interest" size="12"
                       onchange="calculate();">
            </td>
        </tr>
        <tr>
            <td>3)</td>
            <td>Monthly Payment Amount:</td>
            <td>
                <input type="text" name="monthly" size="12"
                       onchange="calculate();">
            </td>
        </tr>
        <tr>
            <td>4)</td>
            <td>Terms:</td>
            <td>
                <input type="text" name="terms" size="12"
                       onchange="calculate();">
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <input type="button" value="Calculate" onclick="calculate();">
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <b>Investment Information:</b>
            </td>
        </tr>
        <tr>
            <td>4)</td>
            <td>Your Investment will be worth:</td>
            <td><input type="text" name="payment" size="12"></td>
        </tr>
    </table>
</form>
<script type="text/javascript">
  function calculate() {
      var investment = document.fv.investment.value;
      var interest = document.fv.interest.value / 100 / 12;
      var terms = document.fv.terms.value * 12;

      var x = Math.pow(1 + interest, terms);
      var monthly = (investment * x);
       
      if (!isNaN(monthly) && (monthly !== Number.POSITIVE_INFINITY) &&
              (monthly !== Number.NEGATIVE_INFINITY)) {
          document.fv.payment.value = round(monthly);
      }
      else {
          document.fv.payment.value = "";
      }
  }

  function round(x) {
      return Math.round(x * 100) / 100;
  }
</script>
</body>

</html>