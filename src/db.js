const mongodb = require("mongodb");

let _db;

const connect = () => {
  const uri = process.env.MONGO_URI;
  const config = {
    useNewUrlParser: true
  };
  const client = new mongodb.MongoClient(uri, config);
  client.connect((err, client) => {
    if (err) {
      console.log("Failed to connect to mongo.", err);
      throw err;
    }
    _db = client.db(process.env.MONGO_DB);
    console.log("Connected to Mongo.");
  });
};

const db = () => _db;

module.exports = {
  connect,
  db
};
