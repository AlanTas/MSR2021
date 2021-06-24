var lender = [
  [{
      "name": "IFC",
      "amount": 50
    },
    {
      "name": "ABC",
      "amount": 10
    }
  ],
  [{
      "name": "DEF",
      "amount": 40
    },
    {
      "name": "GHI",
      "amount": 100
    }
  ]
];

var names = ["Gary", "Neil", "Luke", "Ben"];

var pageNumbers = [
  ["page 0"],
  ["page 1"]
];
var lenderObj = {
  "lenders": {
  }
}

//Loop
var nameIterator = 0;
for(var i = 0; i < lender.length; i++) {
    lenderObj.lenders[pageNumbers[i]] = {};  
  var lenderItem = lender[i];
  for(var j = 0; j < lenderItem.length; j++) {
    lenderObj.lenders[pageNumbers[i]][names[nameIterator]] = {};
    lenderObj.lenders[pageNumbers[i]][names[nameIterator]].financiers = lenderItem[j];
    nameIterator++;
  }
}
console.log(lenderObj);