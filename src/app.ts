import express from "express";
import { createServer } from "http";
import cors from "cors";

// Routes
import routesMain from "./routes/main.routes";

const app = express();
const server = createServer(app);

app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routesMain);

export { app, server };
