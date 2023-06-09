# App Summary

This expense tracker app allows users to manage their financial transactions. They can input the name, amount, and type of the transaction. Users can add, edit, and delete transactions from the app. This app uses Redux to manage state and asynchronous requests using Redux Toolkit's createAsyncThunk function. The app interacts with a server through the transactionsApi module, which provides CRUD functionality for transactions.

# Documentation

## Redux Slice

The Redux slice in this app is responsible for managing the state of the transactions, including loading state, error state, and the transactions themselves. The slice also includes several async thunks for fetching, adding, modifying, and deleting transactions.

The initial state of the slice includes the following fields:

- isLoading: A boolean indicating whether the app is currently loading data.
- isError: A boolean indicating whether an error has occurred.
- error: A string that contains the error message if isError is true.
- editing: An object that stores the transaction being edited.
- transactions: An array that contains all the transactions.

## Async Thunks

The async thunks in this slice are used to make asynchronous requests to the server using the transactionsApi module.

### fetchTransactions

The fetchTransactions thunk is responsible for loading all the transactions from the server. It dispatches the following actions:

-pending: Sets isLoading to true and isError to false.
-fulfilled: Sets isLoading and isError to false and updates the transactions array with the response payload.

- -rejected: Sets isLoading to false, isError to true, and error to the error message.

### addTransaction

The addTransaction thunk is responsible for adding a new transaction to the server. It dispatches the following actions:

- pending: Sets isLoading to true and isError to false.
- fulfilled: Sets isLoading and isError to false and adds the new transaction to the transactions array.
- rejected: Sets isLoading to false, isError to true, and error to the error message.
  modifyTransaction
  The modifyTransaction thunk is responsible for modifying an existing transaction on the server. It dispatches the following actions:

- pending: Sets isLoading to true and isError to false.
- fulfilled: Sets isLoading and isError to false and updates the transactions array with the modified transaction.
- rejected: Sets isLoading to false, isError to true, and error to the error message.
  removeTransaction
  The removeTransaction thunk is responsible for deleting an existing transaction from the server. It dispatches the following actions:

- pending: Sets isLoading to true and isError to false.
- fulfilled: Sets isLoading and isError to false and removes the deleted transaction from the transactions array.
- rejected: Sets isLoading to false, isError to true, and error to the error message.
  Reducers
  The reducers in this slice are responsible for updating the state of the transactions based on the dispatched actions.

### editActive

The editActive reducer is responsible for updating the editing field of the state to the transaction being edited.

### editInActive

The editInActive reducer is responsible for clearing the editing field of the state.

### Extra Reducers

The extraReducers function in this slice is responsible for handling the dispatched actions and updating the state of the transactions accordingly.

#### For each async thunk, there are three cases:

- pending: Sets isLoading to true and isError to false.
- fulfilled: Sets isLoading and isError to false and updates the transactions array with the response payload.
- rejected: Sets isLoading to false, isError to true, and error to the error message.
  When the modifyTransaction or removeTransaction thunk is fulfilled, it updates the transactions array by finding the index of the transaction using the ID and replacing it with the modified transaction or removing it from the array.

When the removeTransaction thunk is fulfilled, it
