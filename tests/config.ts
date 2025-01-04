import dotenv from "dotenv";
import path from "path";

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const config = {
  username: process.env.USERNAME ?? "",
  password: process.env.PASSWORD ?? "",
};

if (!config.username || !config.password) {
  throw new Error("Missing required configuration: Username or Password");
}
