const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:test123@cluster0.35bgxe8.mongodb.net/?retryWrites=true&w=majority"
    // {
    //   // useCreateIndex: true,
    //   // useNewUrlParser: true,
    //   // useUnifiedTopology: true,
    // }
  )
  .then(() => {
    console.log("connection is successful");
  })

  .catch((error) => {
    console.log("error", error);
  });
