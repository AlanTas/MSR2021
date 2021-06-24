var cent = "search";
con.connect(function (err) {
if (err) throw err;
var sql ="SELECT * FROM cadito.activitys WHERE description like %?%";
//Send an array with value(s) to replace the escaped values:
con.query(sql, [cent], function (err, result) {
    console.log(global.re = JSON.stringify((result)));
});

});
