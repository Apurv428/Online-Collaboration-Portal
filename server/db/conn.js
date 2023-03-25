const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/spaces";

mongoose
  .connect("mongodb://localhost:27017/spaces", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("no connection"));
