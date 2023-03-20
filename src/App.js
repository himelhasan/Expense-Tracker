import React from "react";
import "./App.css";
import Bank from "./Bank";
import AddTransitionForm from "./components/AddTransitionForm";
import BalanceCardTop from "./components/BalanceCardTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <Header></Header>
      <div class="main">
        <div class="container">
          <BalanceCardTop />
          <AddTransitionForm />
          <p class="second_heading">Your Transactions:</p>
          <div class="conatiner_of_list_of_transactions">
            <ul>
              <Transaction />
              <Transaction />
            </ul>
          </div>
        </div>
      </div>
      <Bank />
      <Footer></Footer>
    </>
  );
}

export default App;
