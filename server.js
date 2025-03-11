const mongoose = require("mongoose");
const app = require("./app");

const {DB_HOST,PORT}=process.env
const port = PORT || 4000;


mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => console.log("Server running"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
