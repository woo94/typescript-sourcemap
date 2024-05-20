// src/index.ts
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  const result = (global as any).nonExistentFunction();
  res.send("Hello, World!");
});

app.listen(3456, () => {
  console.log("server is running on port 3456");
});
