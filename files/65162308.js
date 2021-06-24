const fetchData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = await response.json()
  return json
}

const thead1 = document.querySelector('#table > thead')
const tbody1 = document.querySelector('#table > tbody')

const headerHtml = (items) => {
  let html = ''
  html += '<tr><th></th>'
  Object.keys(items[0]).forEach(header => {
    html += `<th>${ header }</th>`
  })
  html += '</tr>'
  return html
}

const bodyHtml = (items) => {
  let html = ''
  items.forEach(item => {
    html += '<tr>'
    html += '<td></td>'
    for (let key in item) {
      html += `<td>${ item[key] }</td>`
    }
    html += '</tr>'
  })
  return html

}

(async function() {
  // get data from the API
  const response = await fetchData()

  // transform data for our requirements
  let transformed = response.reduce((a, c) => {
    if (typeof a[c.userId] === "undefined") a[c.userId] = 0
    a[c.userId] += 1
    return a
  }, {})

  let data = Object.entries(transformed).map(([id, val]) => ({
    id,
    val
  }))

  thead1.innerHTML = headerHtml(data)
  tbody1.innerHTML = bodyHtml(data)

  // create chart:
  Highcharts.chart('container', {
    data: {
      table: 'table'
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Data extracted from a HTML table in the page'
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Units'
      }
    },
    tooltip: {
      formatter: function() {
        return `
          <b>${ this.series.name }</b>
        `
      }
    }
  });

})();
#table {
  border-collapse: collapse;
  border: 1px solid #cacaca;
  width: 200px;
}

#table tr,
#table th,
#table td {
  border: 1px solid #6f6f6f;
}

#table th {
  background: #cacaca;
}
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<script src="https://code.highcharts.com/modules/export-data.js"></script>
<table id="table">
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>
<hr />
<div id="container"></div>