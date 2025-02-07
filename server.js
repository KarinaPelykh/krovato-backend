const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Karyna:AAUW92N8K7fN.9q@cluster0.dl9lr.mongodb.net/krovato_shop?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => console.log("Server running"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
