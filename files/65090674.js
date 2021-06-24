const data = [ 
{ fieldname: 'files0', originalname: 'Screenshot from 2020-05-23 01-52-30.png', },
{ fieldname: 'files0', originalname: 'Screenshot from 2020-05-22 08-44-05.png', },
{ fieldname: 'files1', originalname: 'Screenshot from 2020-05-30 11-36-42.png', },
{ fieldname: 'files1', originalname: 'Screenshot from 2020-05-30 11-36-36.png', },
{ fieldname: 'files1', originalname: 'Screenshot from 2020-05-30 11-36-31.png', }],
arr = data.reduce((acc, cur) => {
  const idx = cur.fieldname.replace("files",""); // get 0, 1
  if (acc[idx]) acc[idx].push(cur); // if already there, just push
  else acc[idx] = [cur];            // otherwise initialise
  return acc;
},[]) 

console.log(arr)