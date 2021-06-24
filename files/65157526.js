highlightRows = () => {
  let oddRows = document.querySelectorAll('tbody > tr.show')
  oddRows.forEach((row, index) => {
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
  const rows = document.querySelectorAll("#body1 > tr");
  //check if value is not none
  if (option != "none") {
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
  } else {
 //loop though rows
    rows.forEach(row => {
    //check if row has class hidden
      if (row.classList.contains("hidden")) {
        row.className = 'show'//add showclass
      }      
    })
    highlightRows()
  }

};
document.getElementById("filter").addEventListener("change", filterOptions);
.table-filters {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;
  text-align: center;
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

tbody tr.show {
  display: table-row;
}

tbody tr.hidden {
  display: none;
}

table.vypis {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table.vypis>caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table.vypis>tr.vypis-riadok {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table.vypis th,
table.vypis td {
  padding: .625em;
  text-align: center;
}

table.vypis th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="table-filters">
  <select id="filter">
    <option selected value="none">Categories</option>
    <option>Hobby</option>
    <option>Others</option>


  </select>
</div>
<table class="vypis">
  <caption>Pohyby na účte</caption>
  <thead>
    <tr>
      <th scope="col">Refer</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody id="body1">
    <tr class="vypis-riadok">
      <td scope="row" data-label="refer">[[X04_riadok_1_popis_transakcie]] <br> [[X10_riadok_2_popis_transakcie]]</td>
      <td data-label="date">[[X02_riadok_1_datum]]</td>
      <td data-label="price">[[X08_riadok_1_suma]] €</td>
      <td data-label="category">Others</td>
    </tr>
    <tr class="vypis-riadok">
      <td scope="row" data-label="refer">[[X04_riadok_1_popis_transakcie]] <br> [[X10_riadok_2_popis_transakcie]]</td>
      <td data-label="date">[[X02_riadok_1_datum]]</td>
      <td data-label="price">[[X08_riadok_1_suma]] €</td>
      <td data-label="category">Hobby</td>
    </tr>
    <tr class="vypis-riadok">
      <td scope="row" data-label="refer">[[X04_riadok_1_popis_transakcie]] <br> [[X10_riadok_2_popis_transakcie]]</td>
      <td data-label="date">[[X02_riadok_1_datum]]</td>
      <td data-label="price">[[X08_riadok_1_suma]] €</td>
      <td data-label="category">Others</td>
    </tr>
  </tbody>
</table>