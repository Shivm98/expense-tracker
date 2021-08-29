import React from "react";
import "./Expense.css";
import { BiCoffee, BiCart } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Expense = (props) => {
  let icon;

  switch (props.type) {
    case "restaurent":
      icon = <BiCoffee />;
      break;
    case "shopping":
      icon = <BiCart />;
      break;
    case "travel":
      icon = <IoAirplane />;
    default:
      icon = <BsFillExclamationCircleFill />;
  }

  return (
    <div className="expense">
      <span className="icon">{icon}</span>

      <div className="data">
        <h4 className="title">{props.title}</h4>
        <span className="time">{props.time}</span>
      </div>

      <div className="amount">₹ {props.amount}</div>
    </div>
  );
};

export default Expense;
