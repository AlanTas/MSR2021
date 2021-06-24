import React from "react";
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "./Checkbox";
import "./styles.css";

const App = () => {
  const [onChange, setOnChange] = React.useState({});

  return (
    <div>
      <CheckboxGroup onChange={setOnChange}>
        <label>
          <AllCheckerCheckbox />
          <span>Download the points for the full body</span>
        </label>
        <ul>
          <li>
            <label>
              <Checkbox name="upperbody" />
              <span>Download only the upper body points</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox name="lowerbody" />
              <span>Download only the lower body points</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox name="head" />
              <span>Download only the head points</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox name="fullhands" />
              <span>Download both hands points</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox name="lefthand" />
              <span>Download left hand points</span>
            </label>
          </li>
          <li>
            <label>
              <Checkbox name="righthand" />
              <span>Download right hand points</span>
            </label>
          </li>
        </ul>
      </CheckboxGroup>
      <div>
        <h1>Values</h1>
        <pre>{JSON.stringify(onChange, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
