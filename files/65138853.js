function navbar(id,CSVdata) {
        if(CSVdata){
           console.log('CSVdata',CSVdata)
           return `<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a id="downloadcsv${id}" class="dropdown-item" href="#" onclick='downloadCSV(${id},${JSON.stringify(CSVdata)})'>Download CSV</a>
                   </div>
            `;
        }
 }

function downloadCSV(id,data) {
    console.log("downloadcsv",data);
}
