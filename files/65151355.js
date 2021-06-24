const getDaysArray = async (s, e) => {
    let a = [];
    let d = new Date(s);
    let emptyCount = d.getDay();
    for(let i = 0; i < emptyCount; i++) {
      a.push('');
    }
    for (d; d <= e; d.setDate(d.getDate() + 1)) {
      a.push(new Date(d).toString());
    }
    return a;
  };
