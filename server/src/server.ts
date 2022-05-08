import express from "express";
import cors from "cors";
import { routes } from "./infra/routes"

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server run in port 3333"))