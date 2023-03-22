import express from "express";
import dotenv from "dotenv";
import router from "./router/product";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

mongoose.connect('mongodb://127.0.0.1:27107/nodejs');

export const viteNodeApp = app;
