 $("#search").on("keyup", function() {
        $("td").closest("tr").hide()
    var value = $(this).val();
    if (value) {
        $("td:contains('"+value+"')").closest("tr").show()
    } 
    else {
        $("td").closest("tr").show()
    }
});
