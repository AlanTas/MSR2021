let productDetails = [
    {
        id: "1",
        partNo: "10",
        productName: "bag",
        size: "30",
        color: ["Blue"],
        description: "sky bags ",

    },
    {
        id: "2",
        partNo: "15",
        productName: "bottle",
        size: "10",
        color: ["Green", "Orange"],
        description: "plastic and still",
    },
    {
        id: "4",
        partNo: "20",
        productName: "lunchbox",
        size: "20",
        color: ["Blue", "Red"],
        description: "fresh food",
    },
    {
        id: "3",
        partNo: "40",
        productName: "pen",
        size: "10",
        color: ["Red", "Blue"],
        description: "gel pen ",

    }, {
        id: "5",
        partNo: "35",
        productName: "notebook",
        size: "30",
        color: ["Blue", "Red", "Orange"],
        description: "Writing",
    }
]

/** * function to add company details */
function addCompanyDetails() {
    let data = (document.getElementById('productId').value);
    let date1 = document.getElementById('date').value;
    let Caddress = document.getElementById('address').value;
    let Cname = (document.getElementById('companyName').value);

    if (data === '') {
        message("enter id for search");
    }
    for (let i = 0; i < productDetails.length; i++) {
        let companyDetails = productDetails[i].companyDetails ? productDetails[i].companyDetails : { date: "", address: "", companyName: "" };
        let p = companyDetails;
        if ((productDetails[i].id) == (data)) {
            p.companyName = Cname ;
            productDetails[i].date = date1 ;
            productDetails[i].address = Caddress;
            productDetails[i].companyName=Cname;
            
            
        }
       
        displayData();
        clearInputData();
    }
}

/** * this function display the data in table */
function displayData(companyDetails) {
    objectArray = Object.values(productDetails);
    display(objectArray, companyDetails,clearInputData);
}

/** * this function is for get the value from form */
function getValue() {
    let id = document.getElementById('productId').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    let companyName = document.getElementById('companyName').value;
    return { id, date, address, companyName };
}

/** * Function is to display the data in table */
function display(productStore,callBack) {
    messageTable(" ");
    let data = productDetails;
   
   
    let table = "<table border = 1 cellpadding = 10 ><th colspan=7 >Product Details</th><th colspan=7 >company Details</th><tr><th>Product Id</th><th>Part No</th><th>Name</th><th>Size</th><th>Color</th><th>Description</th><th>weight</th><th>Date</th><th>Address</th><th>Company name</th></tr>";
    for (let i = 0; i < data.length; i++) {
       
        if (data[i].productWeight === undefined) {
            data[i].productWeight = " ";
        } else { }
        if (data[i].companyName === undefined) {
            data[i].companyName = " ";
        } else { }
        if (data[i].date === undefined) {
            data[i].date = "   ";
        } else { }
        if (data[i].address === undefined) {
            data[i].address = "   ";
        } else { }

        table += "<tr><td>" + data[i].id + "</td>";
        table += "<td>" + data[i].partNo + "</td>";
        table += "<td>" + data[i].productName + "</td>";
        table += "<td>" + data[i].size + "</td>";
        table += "<td>" + data[i].color + "</td>";
        table += "<td>" + data[i].description + "</td>";
        table += "<td>" + data[i].productWeight + "</td>";
        table += "<td>" + data[i].date + "</td>";
        table += "<td>" + data[i].address + "</td>";
        table += "<td>" + data[i].companyName + "</td>";
    }
    messageTable(table);

    clearInputData();
}
/** * function is to print the table */
function messageTable(data) {
    document.getElementById("messageTableA").innerHTML = data;
}

/** * this function is to clear the data */
function clearInputData() {
    document.getElementById("productId").value = "";
    document.getElementById("address").value = "";
    document.getElementById("date").value = "";
    document.getElementById("companyName").value = "";
}
<!DOCTYPE html>
<html>

<head>
    <script src="home.js"></script>
    <style>
        th,
        td,
        p,
        input {
            font-family: Arial, Helvetica, sans-serif;
        }

        table,
        th,
        td {
            border: solid 1px #DDD;
            border-collapse: collapse;
            padding: 10px 10px;
            text-align: center;
        }

        th {
            font-weight: bold;
        }
    </style>
</head>

<body onload="display()">
    <h2>Product Details:</h2>
    <form action="">
        <label for="id">Id: </label>&nbsp;&nbsp; <input type="number" id="productId" required> <input type="button"
            value="autofill" onclick="auto()"><br><br> 

        <label for="EstablishDate">Establish Date:</label>&nbsp;&nbsp; <input type="date" id="date" required><br><br>
        <label for="address">Address:</label><br><br> <textarea name="address" id="address" cols="30"
            rows="10"></textarea><br><br>
        <label for="CompanyName">Company Name:</label>&nbsp;&nbsp; <input type="text" id="companyName" required><br><br>


        <input type="button" value="add company details" onclick="addCompanyDetails()"><br><br>
        <p id="result"></p>
        <p id="demo"></p>
        <p id="messageTableA"></p>
    </form>
</body>

</html>