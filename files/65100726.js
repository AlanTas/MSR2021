var avgLineChartData = {
        labels: ['1', '1', '1', '1', '1', '1', '1'],
        datasets: [{
            label: 'Avg Temperature (F)',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: [
                65 - randomScalingFactor(),
                53 - randomScalingFactor(),
                58 - randomScalingFactor(),
                54 - randomScalingFactor(),
                62 - randomScalingFactor(),
                65 - randomScalingFactor(),
                74 - randomScalingFactor()
            ],
            yAxisID: 'y-axis-1',
        }]
    };
