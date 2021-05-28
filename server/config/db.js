const mongoose = require("mongoose");

const dbConn = async () => {
  await mongoose.connect(
    process.env.DB_URI,
    {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.error(err);
    }
  );
  console.log("DB Connected");
};

module.exports = dbConn;
