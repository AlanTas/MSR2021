google.charts.load('current', {
  packages: ['corechart'],
  language: 'nl'
}).then(function () {
  var data = google.visualization.arrayToDataTable([["","Appels","Peren","Bananen","dec?"],[new Date(2018, 0, 15),5217,4162,3014,0],[new Date(2018, 1, 15),4691,3582,2552,0],[new Date(2018, 2, 15),5427,4651,4160,0],[new Date(2018, 3, 15),4272,3571,3765,0],[new Date(2018, 4, 15),4409,3266,3020,0],[new Date(2018, 5, 15),4566,3566,3131,0],[new Date(2018, 6, 15),4628,3329,3742,0],[new Date(2018, 7, 15),4175,3309,3390,0],[new Date(2018, 8, 15),4794,3695,3047,0],[new Date(2018, 9, 15),5075,3976,2856,0],[new Date(2018, 10, 15),7568,6737,3056,0],[new Date(2018, 11, 15),7978,7551,4634,0],[new Date(2019, 0, 15),5300,5101,3730,0],[new Date(2019, 1, 15),4526,4310,3342,0],[new Date(2019, 2, 15),5399,5053,4335,0],[new Date(2019, 3, 15),4380,4187,4045,0],[new Date(2019, 4, 15),4940,4560,3854,0],[new Date(2019, 5, 15),4819,4529,3617,0],[new Date(2019, 6, 15),5158,4723,4783,0],[new Date(2019, 7, 15),4813,4290,3673,0],[new Date(2019, 8, 15),5935,5147,3504,0],[new Date(2019, 9, 15),5886,5362,3620,0],[new Date(2019, 10, 15),8565,7706,5652,0],[new Date(2019, 11, 15),9373,8416,4719,0],[new Date(2020, 0, 15),6054,6173,4367,0],[new Date(2020, 1, 15),5691,5458,4340,0],[new Date(2020, 2, 15),14864,6467,8200,0],[new Date(2020, 3, 15),21182,9031,7064,0],[new Date(2020, 4, 15),16590,9828,6981,0],[new Date(2020, 5, 15),13621,10060,7240,0],[new Date(2020, 6, 15),9966,7411,6878,0],[new Date(2020, 7, 15),9771,6948,6265,0],[new Date(2020, 8, 15),11033,7584,4794,0],[new Date(2020, 9, 15),13606,8981,5241,0],[new Date(2020, 10, 15),24279,11658,5889,0],[new Date(2020, 11, 15),2615,1523,439,49463]]);

  var formatMonth = new google.visualization.DateFormat({
    pattern: 'MMM yyyy'
  });
  formatMonth.format(data, 0);

  var options = {'title':'Consumptie per maand',
                 'titleTextStyle': { 'fontSize': 15 },
                 'width':640,
                 'height':240,
                 'legend': { 'position':'bottom' },
                 'series': {"0":{"color":"66aabb"},"1":{"color":"66ddee"},"3":{"color":"e8f8ff"},"2":{"color":"bbeeff"}},
                 'chartArea': { 'width': '90%', 'left': 60, 'right': 20 },
                 'bar': { 'groupWidth': '80%' },
                 'isStacked':true};
  var chart = new google.visualization.ColumnChart(document.getElementById('chart2'));
  chart.draw(data, options);
});