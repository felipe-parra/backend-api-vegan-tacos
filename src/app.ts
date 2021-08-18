import express from "express";
import cors from "cors";
import logger from "morgan";
import { config } from "./config";

// swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";
import indexRoutes from "./routes";

const app = express();

app.set("port", config.port);
app.set("port", config.port);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded());

app.use(`/api/${config.versionApi}/`,indexRoutes)

export default app;
