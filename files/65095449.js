const items = 
  [ { group: "group_1", text: "Text 1",  value: "1"  } 
  , { group: "group_2", text: "Text 1",  value: "21" } 
  , { group: "group_1", text: "Text 2",  value: "2"  } 
  , { group: "group_1", text: "Text 3",  value: "3"  } 
  , {                   text: "Text 30", value: "30" } 
  ] 

const groups = items.reduce((r,{group,...other})=>
  {
  if (!group) return r
  let grp = r.find(x=>x.some(z=>z.group===group))
  if (!grp) r.push([{group,...other}])
  else grp.push( {group,...other} )
  return r
  }
  ,[])

console.log( groups ) 
const items = 
  [ { group: "group_1", text: "Text 1",  value: "1"  } 
  , { group: "group_2", text: "Text 1",  value: "21" } 
  , { group: "group_1", text: "Text 2",  value: "2"  } 
  , { group: "group_1", text: "Text 3",  value: "3"  } 
  , {                   text: "Text 30", value: "30" } 
  ] 
       
const groups = items.reduce((r, { group, ...other})=>
  {
  if (!group) return r
  let grp = r.find(x=>x.group===group)
  if (!grp) 
    {
    grp = { group, elements:[] }
    r.push(grp)
    }
  grp.elements.push({...other})
  return r
  }
  ,[]);

console.log(  groups )