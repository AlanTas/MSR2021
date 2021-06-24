function pdfToDoc() {
  
  var files = [];

  function getListOfId(){
    var folderId = "1BpPZynsF5tjI5bysoOeHjKbr3gFCm7P8";
    var filesN = DriveApp.getFolderById(folderId).getFiles();
    while (filesN.hasNext()) files.push(filesN.next().getId());
}
  getListOfId()
  for(var i=0;i<files.length;i++){
    var fileBlob = DriveApp.getFileById(files[i]).getBlob();
    var resource = {
      title: fileBlob.getName(),
      mimeType: fileBlob.getContentType()
    };
    var options = {
      ocr: true,
      convert: true
    };
  
    var docFile = Drive.Files.insert(resource, fileBlob, options);
    var docFileId = docFile.getId();  
    var saveDocFile = DriveApp.getFileById(docFileId);
      
    DriveApp.getFolderById("1BpPZynsF5tjI5bysoOeHjKbr3gFCm7P8").addFile(saveDocFile);
    DriveApp.getRootFolder().removeFile(saveDocFile);
    }
}
