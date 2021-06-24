<script>
function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
alert(elementId + " Text copied");
  
let textarea = document.getElementById("select-this");
  textarea.focus();
}
</script>

<div class="wrapper">
  <p id="p1">P1: I am paragraph 1</p>
<p id="p2">P2: I am a second paragraph</p>
<p id="p3">P3: I am a 3 paragraph</p>
<button onclick="copyToClipboard('p1')">Copy P1</button>
<button onclick="copyToClipboard('p2')">Copy P2</button>
<button onclick="copyToClipboard('p3')">Copy P3</button>
<br/><br/>
  
  <textarea id="select-this" value="I just copied this with only JavaScript"/></textarea>
</div>
