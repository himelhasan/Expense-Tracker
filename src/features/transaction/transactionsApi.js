import axiosInstance from "../../utils/axios";

export const getTransactions = async () => {
  const transactions = await axiosInstance.get("/transactions");
  return transactions.data;
};

export const createTransactions = async (data) => {
  const transactions = await axiosInstance.post("/transactions", data);
  return transactions.data;
};

export const updateTransactions = async (id, data) => {
  const transactions = await axiosInstance.put(`/transactions/${id}`, data);
  return transactions.data;
};

export const deleteTransactions = async (id) => {
  const transactions = await axiosInstance.delete(`/transactions/${id}`);
  return transactions.data;
};
