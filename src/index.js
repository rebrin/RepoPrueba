import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Express app!");
});

app.post("/usuarios", (req, res) => {
  const { nombre, email } = req.body;
  const newUser = { id: Date.now(), nombre, email };
  res.status(201).json(newUser);
});

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

export default app;
