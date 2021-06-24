.taskbox {
  width: 230px;
  padding: 15px;
  left: 100%;
  position: absolute;
  top: 25px;
  background-color: black;
  color: white;
  font-family: courier new;
  font-size: 20px;
  animation: slide-from-right .4s 2s forwards; /* x = 2s */
}

@keyframes slide-from-right {
  to {
    left: calc(100% - 230px - 30px - 25px);
    /* 100% = total width, 230px = element width, 30px = left and right padding, 25px = distance from right border */
  }
}