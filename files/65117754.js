function sample() {
  var id = "###";  // File ID of your CSV file.

  // This is your script.
  var file = DriveApp.getFileById(id);
  var rows = Utilities.parseCsv(file.getBlob().getDataAsString());
  var numColumns = rows[0].length;
  var date = "sample";
  rows.forEach(function(row){
    row[numColumns] = date;
  });
  rows[0][numColumns] = 'Date';
  let csvRows = rows.map(values =>values.map(value => JSON.stringify(value).replace(/\\"/g, '""')));
  let csvData = csvRows.map(values => values.join(',')).join('\n');
  
  // I added below script for checking your CSV data.
  var res = csvData.replace(/\"(|.+?)\"/g, "");
  DriveApp.createFile("sample.txt", res);
}
