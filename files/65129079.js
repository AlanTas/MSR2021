import React from "react";
import Tree from "react-tree-graph";
import "./styles.css";

const data = {
  name: "Parent",
  children: [
    {
      name: "Child One"
    },
    {
      name: "Child Two"
    }
  ]
};
export default function App() {
  return (
    <div className="custom-container">
      <Tree data={data} height={200} width={400} />
    </div>
  );
}


