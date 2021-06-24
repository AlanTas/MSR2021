{
for(var i =0; i< selectrows.length; i++){
   const action = { ...Action }
   action["trackid"] = selectrows[i].innerText.replace(/(^\d+)(.+$)/i, '$1');

   researchService.postExecuteAction(action)
     .then(function(result){
     },function error(result){
     });
}
}
