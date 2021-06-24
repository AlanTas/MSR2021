const data = [2, 2.25, 3.3];

new Chart(document.getElementById("chart"), {
  type: "bar",
  plugins: [{
    afterLayout: chart => {
      let ctx = chart.chart.ctx;
      ctx.save();
      let yAxis = chart.scales["y-axis-0"];
      let yBottom = yAxis.getPixelForValue(0);
      let yTop = yAxis.getPixelForValue(5);          
      let gradient = ctx.createLinearGradient(0, yBottom, 0, yTop);   
      gradient.addColorStop(0, '#FF5722');           
      gradient.addColorStop(0.5, '#FFC107'); 
      gradient.addColorStop(1, '#8BC34A');           
      chart.data.datasets[0].backgroundColor = gradient;
      ctx.restore();
    }
  }],
  data: {
    labels: ["A", "B", "C"],
    datasets: [{
      label: "Evaluation",
      data: data
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          min: Math.min(...data) - 0.2,
          max: Math.max(...data) + 0.2,
          stepSize: 0.5
        }
      }]
    }
  }
});