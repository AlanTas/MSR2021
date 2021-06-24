.img1{
  height: 150px;
  width: 150px;
}

@keyframes fade{ /*The animation*/
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.1;
  }
  100%{
    opacity: 1;
  }
}

.t1{ /*The class which has animation*/
  animation: fade 1 2s; /*Animation will only run once*/
}