import pool from "../../config/db.js";

export const getUserByName_Service = async (name) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE itemname = $1", [
      `%${name}%`,
    ]);
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

export const getUserById_Service = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
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

export const getAllUsers_Service = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
    // console.log(result.rows);
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const createUser_Service = async (userData) => {
  const client = await pool.connect();
  try {
    const { name, email } = userData;
    const result = await client.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    client.release();
  }
};


export const deleteUserById_service = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("DELETE FROM users WHERE id = $1", [id]);
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

export const updateUserById_service = async (id, body) => {
  const client = await pool.connect();
  try {
    const { itemname, quantity } = body;

    const result = await client.query(
      "UPDATE basket SET itemnamename = COALESCE($1,name) , email = COALESCE($2,email)  WHERE id = $3",
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


