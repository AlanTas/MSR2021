const monTr=['u/1','I/4', 'G1','G23', 'LD', 'E1', 'E2 /3', 'LL', 'VAR', 'III', 'VUV', 'V - 11', 'II', 'PB', 'V', '-', 'IV'];
const toExcl=['VAR', 'VUV', 'EIT'];

const b = monTr.map(function(inp, index) {
  if (inp.includes('I') || inp.includes('V')) {
    return index;
  } 
}).filter(index => index != null); 
console.log(b);

const c = monTr.map(function(inp, index) {
  if (inp.includes('I') || inp.includes('V') && !toExcl.includes(inp)) {
    return index
  }
}).filter(index => index != null); 
console.log(c);