import pool from "../config/db.js";

export const getAllUserService = async () => {
  const query = `SELECT * FROM users`;
  const result = await pool.query(query);
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const query = `SELECT * FROM users where id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const createUserService = async (name, email) => {
  const query = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`;
  const result = await pool.query(query, [name, email]);
  return result.rows[0];
};

export const updateUserService = async (id, name, email) => {
  const query = `UPDATE users SET name=$1, email=$2 where id=$3 RETURNING *`;
  const result = pool.query(query, [name, email, id]);
  return result.rows[0];
};

export const deleteUserService = async (id) => {
  const query = `DELETE FROM users WHERE id=$1`;
  const result = pool.query(query, [id]);
  return result.rows[0];
};
