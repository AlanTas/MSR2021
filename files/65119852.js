<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  $('select#selectBox').on('change', function() {
     var value = $(this).val(); //get value from select-box
      $.ajax({
        type: 'POST',//can be post request or get 
        url: url,//put url here where you need to send
        data: {
          'value': value//pass value 
        },
        success: function(response) {
          //result will come here 
           //if recieve as html use           
          $("somedivclass").html(response)        
          //if recieve as separted commas         
          var result = response.split(",")
          //access same using result[0],result[1] ..etc
          //add value to input using
          $("#loginid").val(result[0]);
         //same for other  
    
        }
      });
    })

String value = (String) request.getParameter("value");
String query = "select * from Users where yourcolumnanemtocompare=?";
PreparedStatement ps = con.prepareStatement(query);
ps.setString(1, value);
ResultSet rs = ps.executeQuery();
//if value there 
String text;
if (rs.next()) {
  //change value accordingly..i.e : rs.getstring..
  text = "<input id=" + loginid " type="
  text " value=" + rs.getInt(1) + " /><input id="
  firstname " type="
  text " value=" + rs.getInt(2) + " /> <input id="
  lastname " type="
  text " value=" + rs.getInt(3) + " /><input id="
  address " type="
  text " value=" + rs.getInt(4) + " />";
}

response.setContentType("text/html"); // Set content type 
response.setCharacterEncoding("UTF-8");
response.getWriter().write(text); // response to send back.
//or
if (rs.next()) {
  //change value accordingly..i.e : rs.getstring..
  text = rs.getInt(1) + "," + rs.getInt(2) + "," + rs.getInt(3) + "," + rs.getInt(4);
}
response.setContentType("text/plain"); // Set content type 
response.setCharacterEncoding("UTF-8");
response.getWriter().write(text); // response  to send back..
//or use json to send data..
