let s = [];
for (let j = 0; j < 9999; j++)
{
  let m = [[22,0],[53,0],[64,0],[45,0],[34,0]];
  let l = m.length;
  for(let i = 0; i < m.length; i++)
  {
    let x = Math.floor(Math.random()*l);
    m[i][1] = x; 
  }
  s.push(m);
}
