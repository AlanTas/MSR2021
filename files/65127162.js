function myfunction(X) {
 var list = document.getElementsByClassName(X + " class2");
 var listAll = document.getElementsByClassName("All");
 
     for(var t=0;t<listAll.length;t++)
    listAll[t].style.display="none";
    
     for(var y=0;y<list.length;y++)
    list[y].style.display="block";
 
}