.tooltip {
  margin-top: -100px;
  display: block;
  background: black;
  border-radius: 5px;
  max-width: 300px;
  width: 300px;
  position: absolute;
  padding: 12px 18px;
  font-family: open-sans-regular, sans-serif;
  font-size: 14px;
  color: white;
  line-height: 22px;
  box-sizing: border-box;
  z-index: 1000;
  outline: none;
}

.tooltip.bottom .arrow {
  top: 0;
  left: 50%;
  border-top: none;
  border-bottom: 10px solid black;
}

.tooltip .arrow {
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #43b02a;
  margin-top: -10px;
  margin-left: -10px;
}