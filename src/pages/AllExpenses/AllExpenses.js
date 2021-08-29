import React, { useState } from "react";
import Expense from "../../components/Expense/Expense";
import PageContainer from "../../components/PageContainer/PageContainer";
import "./AllExpenses.css";
import expensesList from "../../data/expense";

const AllExpenses = () => {
  const [expenses, setExpenses] = useState(expensesList);

  return (
    <PageContainer>
      <div className="all-expenses-page">
        <h1 className="primary-heading">All Expenses</h1>

        <div className="expenses-list">
          <ul>
            {expenses.map((expense) => {
              return (
                <Expense
                  type={expense.type}
                  title={expense.title}
                  time={expense.time}
                  amount={expense.amount}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default AllExpenses;
