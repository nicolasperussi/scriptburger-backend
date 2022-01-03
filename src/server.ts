import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const DB = process.env.DATABASE || '';

mongoose
  .connect(DB, {
    // @ts-ignore
    useNewUrlParser: true,
  })
  .then((con) => console.log("Database connection successfully!"))
  .catch(console.log);

const PORT = process.env.PORT || 443;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})