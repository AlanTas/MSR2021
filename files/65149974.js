import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [pageId, setPageId] = useState("0");

  const showPage = (event) => {
    setPageId(event.target.id);
  };

  const data = {
    pages: [
      {
        id: "1",
        products: [
          { img: "test", title: "Title 1", description: "Description 1" },
          { img: "test", title: "Title 2", description: "Description 2" }
        ]
      }
    ]
  };

  return (
    <>
      <button id="1" onClick={showPage}>
        1
      </button>
      <button id="2" onClick={showPage}>
        2
      </button>
      <button id="3" onClick={showPage}>
        3
      </button>
      <button id="4" onClick={showPage}>
        4
      </button>
      <button id="5" onClick={showPage}>
        5
      </button>

      {data.pages
        .filter((page) => page.id === pageId)
        .map((filteredid) => (
          <li>
            <div className="description_box">
              <img src={filteredid.products[0].img} />
              <h2>{filteredid.products[0].title}</h2>
              <p>{filteredid.products[0].description}</p>
            </div>
          </li>
        ))}
    </>
  );
}
