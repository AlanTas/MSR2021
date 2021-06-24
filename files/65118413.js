import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import "./style.css";

let canvasWidth = 200;
let canvasHeight = 200;

export function useCanvas(w, h, props) {
  let ref = useRef();
  let elem = (
    <canvas ref={ref} width={canvasWidth} height={canvasHeight} {...props} />
  );

  let draw = useCallback(
    (box, color) => {
      let c = ref.current;
      let ctx = c.getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(box.x, box.y, box.w, box.w);
    },
    [w, h]
  );

  let clear = useCallback(() => {
    ctx.clearRect(0, 0, w, h);
  }, []);

  return [elem, draw, clear];
}

function getMousePos(e) {
  let rect = e.target.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function isOverABox(box, mousePos) {
  return (
    mousePos.x >= box.x &&
    mousePos.y >= box.y &&
    mousePos.x <= box.x + box.w &&
    mousePos.y <= box.y + box.w
  );
}

export default function App() {
  let [hovered, setHovered] = useState(false);
  let [boxes, setBoxes] = useState([
    { x: 5, y: 5, w: 10 },
    { x: 170, y: 80, w: 10 },
    { x: 80, y: 170, w: 10 }
  ]);

  let [canvas, draw, clear] = useCanvas(canvasWidth, canvasWidth, {
    onMouseMove: e => {
      let pos = getMousePos(e);
      let isHovered = boxes.some(b => isOverABox(b, pos));
      if (isHovered) setHovered(true);
      else setHovered(false);
    }
  });

  useEffect(() => {
    let color = hovered ? "gold" : "black";
    boxes.forEach(b => draw(b, color));
  }, [boxes, draw, hovered]);
  return (
    <div>
      <pre>
        <code>hovered: {hovered ? "true" : "false"}</code>
      </pre>
      {canvas}
    </div>
  );
}
