import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddTransitionForm from "./components/AddTransitionForm";
import BalanceCardTop from "./components/BalanceCardTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import { fetchTransactions } from "./features/transaction/transactionSlice";

function App() {
  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transactions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // let content;
  // if (isLoading) content = <p>LOADING</p>;
  // if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  // if (!isError && !isLoading && transactions?.length === 0)
  //   content = <div className="col-span-12">No Transactions Found</div>;
  // if (!isError && !isLoading && transactions?.length > 0)
  //   content = transactions.map((transaction) => (
  //     <Transaction transaction={transaction} key={transaction.id} />
  //   ));

  return (
    <div className="App">
      {" "}
      <Header></Header>
      <div className="main">
        <div className="container">
          <BalanceCardTop />
          <AddTransitionForm />
          <p className="second_heading">Your Transactions:</p>
          <div className="conatiner_of_list_of_transactions">
            <ul>
              {transactions.map((transaction) => (
                <Transaction transaction={transaction} key={transaction.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
