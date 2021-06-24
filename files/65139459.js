<script language="js"><![CDATA[var log = mc.getServiceLog(); 
            log.info("Logging inside Script Mediator"); 

            var startDate = '2020-12-01';
            var endDate = '2020-12-31';   
            var nextStartDate=addNextDay(startDate);
            mc.setProperty("nextStartDate", nextStartDate);
            var nextEndDate=addNextDay(endDate);
             mc.setProperty("nextEndDate", nextEndDate);
            log.info("startDate:  " + startDate);
            log.info("endDate:  " + endDate);
            function addNextDay(dateString) {
            var  simpleDateFormat = Packages.java.text.SimpleDateFormat;
            var fomatter = new simpleDateFormat("yyyy-MM-dd");
            var currentDate = dateString;
            
            var calendar = Packages.java.util.Calendar.getInstance();
            calendar.setTime(fomatter.parse(currentDate));
            var daysToAdd = mc.getProperty("days");
            calendar.add(Packages.java.util.Calendar.DATE, 1);
            var destDate = fomatter.format(calendar.getTime()); 
            log.info("Destination date : " + destDate );
            return destDate;
            }]]></script>