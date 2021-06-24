const orderIds = document.querySelectorAll(".orderid")
const names = document.querySelectorAll(".name")
let records = []

for(let i=0; i < orderIds.length; i++){
  const record = {
     orderId: orderIds[i].textContent,
     name: names[i].textContent
  }
  records.push(record)
}
