const start_tds =  document.querySelectorAll("tr > td:nth-child(2)");
   const end_tds =  document.querySelectorAll("tr > td:nth-child(3)");
   
   const len = Math.min( start_tds.length, end_tds.length );
   const today = new Date();
   


   for( let i = 0; i < len; i++ ) {
       
    start_time = toDate( start_tds[ i ].textContent ) ;
    end_time =   toDate(end_tds[ i ].textContent );

    if ( today > start_time && today < end_time  ) {
        document.querySelector("tbody > tr:nth-child(" + ( i + 1 ) + ")").classList.add("red");
    }
    
   }



   function toDate( str ) {
    // 02/12/2020 10:00 AM start_tds[ i ].textContent
    const date_parts = str.split("/")
    const d = date_parts[1] + "/" + date_parts[0] + "/" + date_parts[2];
    return new Date( d );
   }
<body>
    <table>
        <thead>
            <tr><th>Subject</th><th>Start Time</th><th>End Time</th><th>Location</th><th>Organizer</th></tr>
        </thead>
        <tbody>
            <tr><td>test event 1</td><td>02/12/2020 10:00 AM</td><td>02/12/2020 06:00 PM</td><td>zoom Meeting</td><td>me</td></tr>
            <tr><td>test event 2</td><td>02/12/2020 11:30 AM</td><td>02/12/2020 09:30 PM</td><td>wherever</td><td>you</td></tr>
            <tr><td>test event 3</td><td>02/12/2020 12:00 PM</td><td>02/12/2020 01:00 PM</td><td>zoom Meeting</td><td>them</td></tr>
        </tbody>
    </table>