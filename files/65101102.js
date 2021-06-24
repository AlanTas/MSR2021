$.ajax({
      method:"POST",
      data: JSON.stringify(detalleVenta),
      dataType: "json",
      contentType: "application/json",
      url: "Venta/GuardarVenta?age=34&name=Marry",
      traditional: true,         
      success: function(data, textStatus) { 
      if (data == "OK" ){
      location.href = '@Url.Action("Index","Compra")'          
    }
