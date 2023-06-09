import React, { useState } from "react";
import "./App.css";
import {
  AboutPage,
  RespondingToEvents,
  UpdatingTheScreen,
  RenderingList,
  SeperateUpdatingTheScreen,
  CreatingAndNestingComponent,
} from "./Component/QuickStart/CreatingAndNestingComponent";
import DisplayList from "./Component/QuickStart/DisplayList";
import { Components } from "./Component/DescribingUI/Components";
import Component from "./Component/AddingInteractivity/Components";

import "./Component/QuickStart/style.css";
import ManagingState from "./Component/MangingState";

function App() {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const initialValues = [1, 2, 3, 4, 5];

  const reduceFn = initialValues?.reduce((acc, elem) => {
    return elem + acc;
  });

  console.log("reduce", reduceFn);

  return (
    <div className="App">
      <h1>Adding Interactivity</h1>
      <Component />

      <h1>Creating and Nesting Component</h1>
      <CreatingAndNestingComponent />
      <AboutPage />
      <RenderingList />
      <RespondingToEvents />
      <br />
      <h1>Updating The Screen</h1>
      <h2>Counters updating together (lifting up state)</h2>
      <UpdatingTheScreen count={count} clickHandler={counter} />
      <UpdatingTheScreen count={count} clickHandler={counter} />
      <br />
      <h2>Counters updating seperate</h2>
      <SeperateUpdatingTheScreen />
      <SeperateUpdatingTheScreen />
      {/**************************** */}
      <DisplayList />
      <ManagingState />
      <br />
      <header>Describing the UI</header>
      <Components />
    </div>
  );
}

export default App;
