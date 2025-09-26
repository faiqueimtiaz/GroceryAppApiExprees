import pool from "../../config/db.js";

export const addBasketItem_service = async (newBasketItem) => {
  const client = await pool.connect();

  try {
    const { itemname, quantity } = newBasketItem;
    const result = await client.query(
      `INSERT INTO basket (itemName, quantity) VALUES ($1, $2) RETURNING *`,
      [itemname, quantity]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error creating basket item:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAllBasketItems_service = async () => {
  const client = await pool.connect();

  try {
    const result = await client.query(`SELECT * FROM basket`);

    return result.rows;
  } catch (error) {
    console.error("Error creating basket item:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getBasketItemByid_service = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM basket WHERE id = $1", [
      id,
    ]);
    // return result;
    // return result.rowCount;
    if (result.rowCount === 1) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const deleteBasketItemById_service = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("DELETE FROM basket WHERE id = $1", [id]);
    // return result;
    // return result.rowCount;
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const updateBasketItemById_service = async (id, body) => {
  const client = await pool.connect();
  try {
    const { itemname, quantity } = body;

    const result = await client.query(
      "UPDATE basket SET itemname = COALESCE($1,itemname) , quantity = COALESCE($2,quantity)  WHERE id = $3",
      [itemname, quantity, id]
    );
    // return result;
    // return result.rowCount;
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};
