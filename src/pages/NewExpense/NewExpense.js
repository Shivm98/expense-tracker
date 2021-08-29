import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageContainer from "../../components/PageContainer/PageContainer";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <PageContainer>
      <div className="new-expense-page">
        <h1 className="primary-heading">Add New Expense</h1>
        <form className="inputs-container">
          <Input type="text" placeholder="enter title" />
          <Input type="number" placeholder="enter amount" />
          <Button className="btn red">add</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default NewExpense;
