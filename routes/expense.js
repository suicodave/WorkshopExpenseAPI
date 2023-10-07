import express from "express";
import databaseRef from "../connection.js";

const expenseRouter = express.Router();

expenseRouter.get("/", async (request, response) => {
  const collection = databaseRef.collection("expenses");

  const results = await collection.find({}).toArray();

  return response.send(results).status(200);
});

expenseRouter.post("/", async (request, response) => {
  const body = request.body;

  const newExpense = {
    amount: body.amount,
    description: body.description,
    date: body.date,
  };

  const collection = databaseRef.collection('expenses');

  await collection.insertOne(newExpense);

  return response.send().status(201);
});

export default expenseRouter;
