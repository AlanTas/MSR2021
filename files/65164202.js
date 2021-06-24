function onEdit(e) {

  const initials = {
    "email1":"initials1",
    "email2":"initials2",
    "email3":"initials3"
  };
  
  var sheet = e.source.getActiveSheet();
  var i = ['Sheet 1', 'Sheet 2'].indexOf(sheet.getName());
  if (e.range.getValue()!='' && i > -1 && e.range.columnStart === 1) {
    e.range.offset(0,4).setValue(Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy"));
    e.range.offset(0,6).setValue(initials[Session.getEffectiveUser().getEmail()]); 
  }
}
