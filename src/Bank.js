import React from "react";

const Bank = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto my-5 p-5 text-white">
          <h1 className="text-3xl font-bold text-black text-center py-3">
            Hello Lal, ajk kormu tore lal e lal!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 m-6 rounded-md drop-shadow-2xl">
              <h2 className="text-3xl pb-3">Deposite</h2>
              <h3 className="text-4xl font-bold">
                $<span id="deposite-amount">200</span>
              </h3>
            </div>
            <div className="gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 m-6 rounded-md drop-shadow-2xl">
              <h2 className="text-3xl pb-3">Withdraw</h2>
              <h3 className="text-4xl font-bold">
                $<span id="withdraw-amount">200</span>
              </h3>
            </div>
            <div className="gap-4 bg-gradient-to-r from-green-400 to-blue-500 p-10 m-6 rounded-md drop-shadow-2xl">
              <h2 className="text-3xl pb-3">Balance</h2>
              <h3 className="text-4xl font-bold">
                $<span id="balance-amount">1000</span>
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- // deposite and withdraw --> */}
        <div className="container mx-auto my-5 p-5 text-white">
          <h1 className="text-3xl font-bold text-black text-center py-3">
            Banking Transition
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="gap-4 bg-gradient-to-r from-sky-500 to-violet-500 p-10 m-6 rounded-md drop-shadow-2xl">
              <h2 className="text-3xl pb-3">Deposite</h2>
              <input
                className="p-2 m-2 w-full lg:w-8/12 hover:drop-shadow-xl hover:duration-500 text-black"
                type="number"
                name=""
                id="deposite-field"
                placeholder="Please Enter Your Deposite Amount"
              />
              <input
                className="p-2 m-2 bg-white hover:bg-cyan-500 w-full lg:w-3/12 text-black hover:text-white font-medium hover:drop-shadow-2xl hover:duration-500"
                type="submit"
                id="btn-deposite"
                value="Deposite"
                disabled
              />
            </div>
            <div className="gap-4 bg-gradient-to-r from-red-400 to-yellow-300 p-10 m-6 rounded-md drop-shadow-2xl">
              <h2 className="text-3xl pb-3">Withdraw</h2>
              <input
                className="p-2 m-2 w-full lg:w-8/12 hover:drop-shadow-xl hover:duration-500 text-black"
                type="number"
                name=""
                id="withdraw-field"
                placeholder="Please Enter Your Withdraw Amount"
              />
              <input
                id="btn-withdraw"
                className="p-2 m-2 bg-white hover:bg-cyan-500 w-full lg:w-3/12 text-black hover:text-white font-medium hover:drop-shadow-2xl hover:duration-500"
                type="submit"
                value="Withdraw"
                disabled
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bank;
