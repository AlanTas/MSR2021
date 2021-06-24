var customers=["customer1","customer2"];
var currentIndex=0;
private function main()
{
  if(customers[currentIndex]){
   function1().done(function(data) {
     console.log("a");
      function2().done(function(data) {
        console.log("b");
        function3().done(function(data) {
          console.log("c");
           currentIndex++; 
           main();
        });
      });
   });
   
  }
}
private function1()
{
  return  $.ajax({
                type: "POST",
                url: url1,
                data: {},
                dataType: 'JSON'
            });
}
private function2()
{
  return  $.ajax({
                type: "POST",
                url: url2,
                data: {},
                dataType: 'JSON'
            });
}
private function3()
{
  return  $.ajax({
                type: "POST",
                url: url3,
                data: {},
                dataType: 'JSON'
            });
}
