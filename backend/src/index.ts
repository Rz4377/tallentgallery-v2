require('dotenv').config()
import express from "express"
import cors from "cors"
import userRouter from "./routes/userRouter";

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRouter);

app.listen(port);