    var input = document.getElementById("Phone_num");
    input.addEventListener("blur", function(){
        const phone = document.getElementById("Phone_num").value;
    const phoneFormatRex = /^\+?[0-9(),.-]+$/;
    var match = phoneFormatRex.exec(phone);
    if (match) {
        document.getElementById("Phone_num").value = phone;
    }
    else {
        document.getElementById("Phone_num").value = "";
    }
    })