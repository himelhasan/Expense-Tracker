import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTransactions,
  deleteTransactions,
  getTransactions,
  updateTransactions,
} from "./transactionsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  editing: {},

  transactions: [],
};

export const fetchTransactions = createAsyncThunk(
  "transactions/loadTransaction",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (data) => {
    const transactions = await createTransactions(data);
    return transactions;
  }
);

export const modifyTransaction = createAsyncThunk(
  "transactions/modifyTransaction",
  async ({ id, data }) => {
    const transactions = await updateTransactions(id, data);
    return transactions;
  }
);

export const removeTransaction = createAsyncThunk(
  "transactions/removeTransaction",
  async (id) => {
    const transactions = await deleteTransactions(id);
    return transactions;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,

  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state, action) => {
      state.editing = {};
    },
  },

  extraReducers: (builder) => {
    builder
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
      .addCase(addTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(modifyTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(modifyTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(modifyTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter((t) => t.id !== action.payload.id);
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default transactionSlice.reducer;
export const { editActive, editInActive } = transactionSlice.actions;
