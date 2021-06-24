function alternateColors() {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getActiveSheet();
  const sr=2;
  const rg=sh.getRange(sr,1,sh.getLastRow()-sr+1,sh.getLastColumn());
  let cA=rg.getBackgrounds();
  cA.forEach(function(r,i){
    r.forEach(function(c,j){
      if(i%2==1) {
        cA[i][j]='#d9d9d9';
      }else{
        cA[i][j]='#ffffff';
      }
    });
  });
  rg.setBackgrounds(cA); 
}
