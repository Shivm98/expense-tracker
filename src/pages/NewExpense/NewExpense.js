import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageContainer from "../../components/PageContainer/PageContainer";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(new Date().getTime());

  const addNewExpense = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "https://expense-tracker-36dba-default-rtdb.firebaseio.com/expenses.json",
      {
        title: title,
        amount: amount,
        date: date,
      }
    );
    console.log(data);
  };

  return (
    <PageContainer>
      <div className="new-expense-page">
        <h1 className="primary-heading">Add New Expense</h1>
        <form className="inputs-container" onSubmit={addNewExpense}>
          <Input
            type="text"
            placeholder="enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            placeholder="enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input type="date" onChange={(e) => setDate(e.target.value)} />
          <Button className="btn red">add</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default NewExpense;
