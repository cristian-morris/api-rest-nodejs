import  db from "../config/db.js";

export const getpizzas = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM pizza";
    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getpizza = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM pizza WHERE id = ?";
    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createpizza = (pizza) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO pizza (nombre, precio) VALUES (?, ?)";
    const { nombre, precio } = pizza;

    db.execute(query, [nombre, precio])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updatepizza = (id, pizza) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE pizza SET nombre = ?, precio = ? WHERE id = ?";
    const { nombre, precio } = pizza;

    db.execute(query, [nombre, precio, id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deletepizza = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM pizza WHERE id = ?";


    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const searchpizza = (precio) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM pizza WHERE precio = ?";
    db.execute(query, [precio])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const searchnamepizza = (nombre) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM pizza WHERE nombre = ?";
    db.execute(query, [nombre])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};