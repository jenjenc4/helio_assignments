require("dotenv").config();
const { MongoClient } = require("mongodb");
let client; //or leave it undefined by writing let client
let usersCollection; //same thing-alt is undefined
//defines function.  "function" almost always goes in front of a normal function.
//"function" doesn't go in front of a method, arrow, or anonymous function (no name)
function connect() {
  const uri = `mongodb+srv://jenjen:${process.env.DB_PASSWORD}@cluster0.xmw4k.mongodb.net/Helio?retryWrites=true&w=majority`;

  client = new MongoClient(uri, { useUnifiedTopology: true }); //name of constructor function to establish a function

  // Connect the client to the server
  return client
    .connect()
    .then(() => {
      console.log("Connected successfully to server");
      // connect to collection
      return client.db("Helio").collection("Users");
    })
    .then((collection) => {
      usersCollection = collection;
    })
    .catch((err) => {
      console.log(err);
    });
}
function insertOne() {
  return usersCollection.insertOne({
    fName: "Monkey",
    lName: "Boy",
  });
}

function readAll() {
  let rtnValue = usersCollection.find({}).toArray();

  return rtnValue;
}

function close() {
  client.close();
}

function findOne() {
  return usersCollection.findOne({ phone: "8017026577" });
}

function updateDocument() {
  return usersCollection.updateOne(
    {
      phone: "8017026577",
    },
    {
      $set: { phone: "3856954274" },
    }
  );
}

function deleteOne() {
  return usersCollection.deleteOne({ fName: "Monkey" });
}

//connect() calls functions
module.exports.connect = connect;
module.exports.insertOne = insertOne;
module.exports.readAll = readAll;
module.exports.close = close;
module.exports.findOne = findOne;
module.exports.updateDocument = updateDocument;
module.exports.deleteOne = deleteOne;
