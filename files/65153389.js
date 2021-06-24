const testeArray = [{name:"antonio", category: ["One","Two"]},{name:"joana", category: ["Two"]}];
const catArray1 = ["One","Two"];
const catArray2 = ["One"];
const text = "an"

const resultArray1 = testeArray.filter((item)=>{
return item.name.includes(text) && item.category.some(x => catArray1.includes(x));
})  
console.log(resultArray1);  //should return antonio and joana objects

const resultArray2 = testeArray.filter((item)=>{
return item.name.includes(text) && item.category.some(x => catArray2.includes(x));
})  
console.log(resultArray2);   //should return antonio object only 