import express from "express";
import bodyParser from "body-parser";
import router from "./router";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);


export default app;