const arr = [ { category: "Diner", item: [ { name: "Chicken Rice", price: 200 }, { name: "Mutton Rice", price: 300 }, ], }, { category: "Breakfast", item: [ { name: "Tea Bisuit", price: 100 }, { name: "Bread Butter", price: 300 }, { name: "Green Tea", price: 80 }, ], }, ]

const term = "Green Tea"

const res = arr
  .map((categoryAndItems) => ({
    category: categoryAndItems.category,
    item: categoryAndItems.item.filter((item) => item.name === term),
  }))
  .filter((categoryAndItems) => categoryAndItems.item.length > 0)

console.log(res)