import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "./transactionsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",

  transactions: [
    {
      name: "Salary from Google",
      type: "income",
      amount: 1000000,
    },
  ],
};

export const fetchTransactions = createAsyncThunk(
  "transactions/loadTransaction",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const addTransactions = createAsyncThunk(
  "transactions/loadTransaction",
  async (data) => {
    const transactions = await getTransactions(data);
    return transactions;
  }
);
export const modifyTransactions = createAsyncThunk(
  "transactions/loadTransaction",
  async ({ id, data }) => {
    const transactions = await getTransactions(id, data);
    return transactions;
  }
);
export const removeTransactions = createAsyncThunk(
  "transactions/loadTransaction",
  async (id) => {
    const transactions = await getTransactions(id);
    return transactions;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch transaction
      .addCase(fetchTransactions.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.transactions = [];
      })

      // add transaction
      .addCase(addTransactions.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions.push = action.payload;
      })
      .addCase(addTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      //  modify Transactions
      .addCase(modifyTransactions.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(modifyTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(modifyTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // delete the transaction
      .addCase(removeTransactions.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter((t) => t.id !== action.payload.id);
      })
      .addCase(removeTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default transactionSlice.reducer;
