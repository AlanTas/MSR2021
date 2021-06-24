const meals = [
    { calorie: 10,
      diet: 'Chicken',
      day: 1
    },
    { calorie: 15,
      diet: 'Soya',
      day: 2
    },
    { calorie: 20,
       diet: 'Chicken',
       day: 3
    },
    { calorie: 25,
        diet: 'Soya',
        day: 4
      }
  ];
const res = meals.reduce((acc,{calorie, diet})=>
     (acc[diet]=(acc[diet] || 0) + calorie, acc),{});
for(const key in res){
  console.log(key,'=',res[key]);
}