function hidecolumns() {
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sh.getSheetByName("Project Team Resources");
  var data = ss.getRange("C5:N10").getValues();
  data[0].forEach((_,col)=>{                 
     if(data.map(d => d[col]).filter(e=>e!='').length==0 && col>2){
       ss.hideColumns(col+3);
     }
  });
}
