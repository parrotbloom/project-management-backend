import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

let user = process.env.database;

console.log("value:", user)