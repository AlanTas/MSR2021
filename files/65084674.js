var arr = [
  {
    links: [
        {
      id:1, 
      name:"Name1"
      },
      {
      id:2, 
      name:"Name2",
      links: [{
        name:"name2",
        url:"url2"
      }]
      },
      {
      id:3, 
      name:"Name3",
      links: [{
        name:"name3",
        url:"url3"
      }]
      }
    ],
    
  }
]

var updatedIndexAt1 = {
                id:"1.1",
        name: "UpdatedName1.1",
        links: {
        name:"name1.1",
        url:"url1.1"
        }
      };
var cloneArr = JSON.parse(JSON.stringify(arr)); // deep clone
var lastArr = cloneArr[0].links.splice(1, 0, updatedIndexAt1);
console.log(arr)