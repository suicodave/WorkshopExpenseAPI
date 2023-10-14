import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import expenseRouter from "./routes/expense.js";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
