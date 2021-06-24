const images = [{
    "url": "https://picsum.photos/id/1020/367/267",
    "title": "Bear on a mountain",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "url": "https://picsum.photos/id/1024/367/267",
    "title": "Eagle in flight",
    "description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "url": "https://picsum.photos/id/1025/367/267",
    "title": "Doggie in a blanket",
    "description" : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."    
  }
];
const html = images.map((img, i) => `<img src="${img.url}" title="${img.title}" data-idx="${i}"/>`);
const container = document.getElementById("container");
const modal = document.getElementById("modal");
container.innerHTML = html.join(" ");
container.addEventListener("click", function(e) {
  const tgt = e.target;
  if (tgt.tagName == "IMG") {
    const idx = tgt.dataset.idx; console.log(idx, images[idx].title)
    modal.querySelector(".title").innerHTML = images[idx].title;
    modal.querySelector(".desc").innerHTML = images[idx].description;
    modal.classList.remove("hide");
  }
})
modal.querySelector(".close").addEventListener("click",function() { modal.classList.add("hide") })
#modal {
  position: absolute;
  top: 100px;
  left: 100px;
  border: 1px solid red;
  height: 200px;
  overflow: auto;
  width: 300px;
  background-color: white;
  padding: 3px;
}

.hide {
  display: none;
}

#container img { cursor: pointer; }

.close { float:right; }