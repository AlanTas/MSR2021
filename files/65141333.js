{
    "data": "orderStatus",
    "render": function (data, type, row) {

        //get id of current row
        var id = row.id;
        console.log(id);

        //modify the href attribute with id value based on actual requirement

        return `
        <div class="text-center">
            <a href="/Admin/OrderAdmin/UpdateOrder/${data}" class="btn btn-success text- 
                white" style="cursor:pointer">
                <i class="fas fa-edit"></i>
            </a>
        </div>
            `;
    }, "width": "5%"
}
