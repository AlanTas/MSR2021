new RGraph.Bar({
    id: 'cvs',
    data: '12,18,10,9,6,20,18'.split(','),
    options: {
        yaxisScaleUnitsPost: 'k',
        colors: ['red'],
        title: 'A basic Bar chart using accessible text',
        titleBold: true,
        xaxis: false,
        yaxis: false,
        marginLeft: 50,
        tooltips: '%{key}',
        tooltipsFormattedUnitsPost: '%',
        tooltipsCss: {
            fontSize: '26pt'
        },
        tooltipsFormattedKeyLabels: ['Dave','John'],
        tooltipsEvent: 'mousemove'
    }
}).draw().responsive([
    {maxWidth:900,width:400,height:150,options: {textSize:10,xaxisLabels:['Mon\n(yuck!)','Tue','Wed','Thu','Fri\n(woo!)','Sat','Sun'],marginInner: 10}},
    {maxWidth:null,width:750,height:250,options: {textSize:14,xaxisLabels: ['Monday\n(yuck!)','Tuesday','Wednesday','Thursday','Friday\n(woo!)','Saturday','Sunday'],marginInner: 20}}
]);
