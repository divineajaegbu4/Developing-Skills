import { useState } from "react";
import "./App.css";
import { topDesserts } from "./Component/Data";
import FeedbackForm from "./Component/Feedback-Form";
import Forms from "./Component/Forms";
import ContextApi, { Header } from "./Component/ContextApi";
import ArrayDestructuring from "./Component/ArrayDestructuring";
import UseStateHook from "./Component/UseStateHook";
import UseEffectHook from "./Component/UseEffectHook";
import FetchingData from "./Component/FetchingData";
import UseReducerFn from "./Component/UseReducerFn";
import UseRefHook from "./Component/UseRefHook";
import { CompileItems } from "./Component/GoalItems";
import Children from "./Component/Children";
import LiveOrders from "./Component/ChildrenCloneApi";
import SpreadOperator from "./Component/SpreadOperator";
import SignUp from "./Component/SignUp";
import Tracker from "./Component/Higher-Order-Component(HOC)";
import DessertFn from "./Component/DataFetcher";
import HorizontalLabelPositionBelowStepper from "./Stepper/Stepper";
import RootForm from "./Component/Practice/Formik-Form/RootForm";



export default function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const listItems = topDesserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;

    return <li key={dessert.id}>{itemText}</li>;
  });

  const data = topDesserts.map((dessert) => {
    let dataList = {
      content: `${dessert.title} - ${dessert.description}`,
      price: dessert.price,
    }

    return (
      <div key={dessert.id}>
        <li>{dataList.content}</li>
        <li>price: {dataList.price}</li>
      </div>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
  };

  const feedbackHandleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Please provide a comment explaining why the experience was poor."
      );
      return;
    }

    console.log("Form submitted!");
    setComment("");
    setScore("10");
  };

  console.log("Data", data)

  return (

    <div>
      <ul>{listItems}</ul>
      <div>{data}</div>

      <Forms
        value={name}
        handleChange={(e) => setName(e.target.value)}
        handleSubmit={handleSubmit}
        disabled={!name}
      />

      <FeedbackForm
        value={score}
        handleChange={(e) => setScore(e.target.value)}
        commentValue={comment}
        commentHandleChange={(e) => setComment(e.target.value)}
        feedbackHandleSubmit={feedbackHandleSubmit}
      />

      <Header />
      <ContextApi />
      <ArrayDestructuring />
      <UseStateHook />
      <CompileItems />
      <UseEffectHook />
      <FetchingData />
      <UseReducerFn />
      <UseRefHook />
      <Children />
      <LiveOrders />
      <SpreadOperator />
      <SignUp />
      <Tracker />
      <DessertFn />

      /******************Stepper******************* */
    </div>
  );
}
