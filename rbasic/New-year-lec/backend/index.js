// import { createTodo, updateTodo } from "./types.js";
// import { Express } from "express";
// import { todo } from "./db.js";
// import express from "express";

const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid data",
    });
    return;
  }
  //put in db

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid Id",
    });
    return;
  }

  await todo.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Updated",
  });

  //update
});

app.listen(3000);
