import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense) // pega as entradas
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); // pega o total de saídas
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); // pega o total de entradas



  }, [transactionsList]);

  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>

  )
};

export default App;