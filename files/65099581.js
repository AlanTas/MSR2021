render() {
this.ul.innerHTML = "";
this.tasks.forEach((task) => {
  const li = document.createElement("li");
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.addEventListener("click", (e) => {
    this.markTask(e);
  });
  li.appendChild(cb);

  li.append(document.createTextNode(task.title));

  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.textContent = "Delete";
  btn.classList.add("remove");
  btn.addEventListener("click", (e) => {
    this.deleteTask(e);
  });
  this.ul.appendChild(li);

   if (task.done) {
    cb.checked = true;
    li.style.textDecoration = "line-through";
   } else {
    cb.checked = false;
    li.style.textDecoration = "none";
   }
 });
}
