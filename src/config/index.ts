import dotenv from "dotenv";

dotenv.config();

const configProd = {
  port: process.env.PORT,
  versionApi: "1.0",
};
const configDev = {
  port: process.env.PORT,
  versionApi: "1.0",
};

let config =
  process.env.NODE_ENV !== "production" ? { ...configProd } : { ...configDev };

export { config };
