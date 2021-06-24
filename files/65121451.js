highlightRows = () => {
    let oddRows = document.querySelectorAll('tbody > tr.show')
    oddRows.forEach((row, index)=> {
        if (index % 2 == 0) {
            row.style.background = '#f1f1f1'
        } else {
            row.style.background = '#fff'
        }
    })
}
const filterOptions = () => {
    const option = document.querySelector("#filter").value;

    const selection = option.replace('&', '')
       
    var rows = document.querySelectorAll("#body1 > tr");
   

    rows.forEach(row => {
        let td = row.querySelector("td:last-child");
        let filter = td.innerText.replace('&', '');
        if (filter === selection) {
            row.className = 'show'
        } else {
            row.className = 'hidden'
        }
    });
    highlightRows()
};
document.getElementById("filter").addEventListener("change", filterOptions);
.table-filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
}
.table-filters a {
  color: #222;
  font-size: 16px;
  font-weight: 500;
  margin-right: 1em;
  display: inline-block;
}
.table-filters a:hover {
  text-decoration: none;
}
.table-filters select {
  background: #fff;

  font-size: 16px;
  font-weight: 500;
  width: 12em;
  height: 2.5em;
}

table.stats {
  background: #fff;
  width: 100%;
  table-layout: fixed;
  border-radius: 6px;
}

thead {
  background: #F36F20;
  color: #fff;
}

th {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 1em;
  border-bottom: 1px solid #ddd;
}

tbody td {
  padding: 1.5em 1em;
}

tbody tr.show {
  display: table-row;
}
tbody tr.hidden {
  display: none;
}
tbody tr.bg-grey, tbody tr:nth-child(odd) {
  background: #f1f1f1;
}
tbody tr:last-child td {
  border-bottom: none;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="table-filters">
    <select id="filter">
      <option disabled selected value="none">Kategórie</option>
      <option>Domov</option>
      <option>Ostatné</option>
      <option>Hobby</option>
      <option>Záhrada</option>
    </select>
  </div>
    <div class="wrapper">
  
      <table class="stats">
        <thead>
          <tr class="head">
            <th>Názov</th>
            <th>Suma</th>
            <th>Kategória</th>
          </tr>
        </thead>
        <tbody id='body1'>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Ostatné</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Ostatné</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Domov</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Ostatné</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Hobby</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Hobby</td>
          </tr>
          <tr class="head">
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Domov</td>
          </tr>

        </tbody>
      </table>
</div>