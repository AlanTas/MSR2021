function onEdit(e){
  var sh=e.range.getSheet();
  var A1=e.range.getA1Notation();
  
  var editDate = Utilities.formatDate(new Date(),Session.getScriptTimeZone(),"MM/dd/yyyy HH:mm:ss");
  
  var nextCell = e.range.offset(0, 1);
  nextCell.setValue(editDate);
  
  var newNote=Utilities.formatString('Last Modified: %s / Updated Cell: %s / Updated Cell Value: %s / Associated Date Cell: %s / Associated Date Cell Value: %s\n',editDate,A1,e.value,nextCell.getA1Notation(),editDate);
  nextCell.setNote(nextCell.getNote() + newNote);
}
