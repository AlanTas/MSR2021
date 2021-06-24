/**
 * Get all children that start before `offset_top` and end after 
 * `offset_top`.
 *
 * @param {(HTMLElement|jQuery|string)} parent 
 *    The parent as the element or as the selector
 * @param {number} offset_top
 *    The top offset to check
 *
 * @return {jQuery}
 *    All elements that are on the specific location.
 */
function findChildrenWithOffset(parent, offset_top){
  let found = $([]);
  $(parent).children().each(function(){
    let t = $(this);
    let o = t.offset();
    let start = o["top"];
    let end = start + t.outerHeight();
    if(start <= offset_top && offset_top <= end){
      found = found.add(t);
    }
    if(t.children().length > 0){
      t.children().each(function(){
        found = found.add(findChildrenWithOffset(this, offset_top));
      });
    }
  });
  
  return found;
}

let c = findChildrenWithOffset(document, 140);
// get the most inner child only
c = c.last();
$(c).css("background", "red");