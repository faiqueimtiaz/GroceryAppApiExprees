import pool from "../../config/db.js";

const addColumnBasketTable = async () => {
  const query = `
    ALTER TABLE basket 
      ADD COLUMN IF NOT EXISTS is_purchased BOOLEAN DEFAULT false
    ;
  `;

  const client = await pool.connect();

  try {
    await client.query(query);
  } catch (error) {
    console.error("Error creating user table:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default addColumnBasketTable;
