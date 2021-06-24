var to_json_linebyline = function to_json_linebyline(wb){
    var sheet = wb.Sheets['Sheet1'];
    var results = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    for(let rowNum = (range.s.r+1); rowNum <= range.e.r; rowNum++){
       let thisRow = {},
           thisNode = '';
       
       for(let colNum=range.s.c; colNum<=range.e.c; colNum++){
          var thisHeader = sheet[XLSX.utils.encode_cell({r: 0, c: colNum})].w
          var thisCell = sheet[XLSX.utils.encode_cell({r: rowNum, c: colNum})].w
          if(colNum === 0){ 
            thisNode = thisCell;
          }
          thisRow[thisHeader] = thisCell;
       }
       thisResult = {};
       thisResult[thisNode] = [thisRow]
       results.push(thisResult)
    }
    return JSON.stringify(results);
}
