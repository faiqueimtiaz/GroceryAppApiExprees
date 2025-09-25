import { configDotenv } from "dotenv";
import express from "express";
import pool from "../config/db.js";
import { createBasketTable } from "../data/createBasketTable.js";
import userRoutes from "../routes/userRoutes.js";
import basketRouters from "../routes/basketRoutes.js";
import createUserTable from "../data/createUserTable.js";

configDotenv();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// createBasketTable();
createUserTable();

app.use("/api", basketRouters);

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
