google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Day');
  data.addColumn('number', 'Yes');
  data.addColumn('number', 'No');

  data.addRows([
    ['19/11/2020 \n 02:48:16', 1.2, 1.6],
    ['19/11/2020 \n 02:48:22', 1.2, 1.6],
    ['19/11/2020 \n 02:48:28', 1.3, 1.6]
  ]);

  var options = {
    legend: {
      position: 'none'
    },
    height: '100%',
    width: '100%',
    vAxis: {
      viewWindow: {
        min: 1,
        max: 1.95,
      }
    },
    colors: ['#1976D2','#E53935']
  };

  var chart = new google.charts.Line(document.getElementById('linechart_material'));
  chart.draw(data, google.charts.Line.convertOptions(options));

  $('#legend tr').hover(function () {
    chart.setSelection([{ column: $(this).data('column'), row: null }]);
  }, function () {
    chart.setSelection([]);
  })
}
.color {
        width: 2.5rem;
        height: 1.5rem;
        border-radius: 0.1875rem;
    }

    #linechart_material {
        width: 500px;
        height:200px;
        padding-top:5px;
    }
    
    .title {
    margin-bottom: -0.0005rem;
}

.subtitle {
    color: gray;
    font-size: 16px;
}

.state {
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 0.1875rem;
    color: white;
    margin-left: 3px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 4px;
    font-weight: 600;
}

.state-open {
    background-color: #00ba54;
}

.state-closed {
    background-color: #d00000;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<div id="linechart_material"></div>


<table class="table-hover">
  <tbody id="legend">
    <tr data-column="1">
      <td>
        <div class="color" style="background-color:#1976D2"></div>
      </td>
      <td style="padding-left:20px; padding-right:20px; padding-top:5px; padding-bottom:5px;">
        Yes
      </td>
      <td>
        1.3
      </td>
    </tr>
    <tr data-column="2">
      <td>
        <div class="color" style="background-color:#E53935"></div>
      </td>
      <td style="padding-left:20px; padding-right:20px; padding-top:5px; padding-bottom:5px;">
        No
      </td>
      <td>
        1.6
      </td>
    </tr>
  </tbody>
</table>