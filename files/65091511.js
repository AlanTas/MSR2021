function CopyCells() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName("sheet1"); //source sheet
  const sheet2 = ss.getSheetByName("sheet2"); //target sheet
  const range1 = sheet1.getRange('A5:A800');
  const range2 = sheet2.getRange('C7:C802');
  const vals1 = range1.getValues().flat();
  const vals2 = range2.getValues().flat();
  const fvals = vals2.map((v,i)=>[v==''?vals1[i]:v]);
  range2.clearContent();
  range2.setValues(fvals);
}
 
function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu('Button')
  .addItem('Copy Cells', 'CopyCells')
  .addToUi();
}
