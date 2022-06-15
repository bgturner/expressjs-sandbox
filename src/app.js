require("dotenv").config();
const express = require("express");
const postRouter = require("./routes/posts");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT;

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`);
});
