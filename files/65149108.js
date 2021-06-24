function addLink(el, text){
  let t = el.textContent;
  el.textContent = '';
  let idx, prev = 0;
  while((idx = t.indexOf(text, prev)) !== -1){
    el.append(t.slice(prev, idx));
    const a = document.createElement('a');
    a.href = '/' + text;
    a.textContent = text;
    el.appendChild(a);
    prev = idx + text.length;
  }
  el.append(t.slice(prev));
}
addLink(document.querySelector('p'), 'ipsum');