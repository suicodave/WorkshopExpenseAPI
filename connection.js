import { MongoClient } from "mongodb";

const connectionString = process.env.DATABASE_URL || "";

const client = new MongoClient(connectionString);

var connection = await client.connect();

const databaseRef = connection.db('ExpenseDatabase');

export default databaseRef;