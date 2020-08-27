const db = require("./dal");

//asynchronous function always returns a promise
db.connect()
  .then(() => {
    return db.insertOne();
  })
  .then(() => {
    //db.readAll() //this is async too, bc we said it was in dal.js
    return db.readAll();
  })
  .then((users) => {
    console.log(users);
  })
  .then(() => {
    return db.findOne();
  })
  .then((oneFound) => {
    console.log(oneFound);
  })
  .then(() => 
  {
      return db.updateDocument()
  })
  .then(() => 
  {

      return db.deleteOne()
  })
  .then(() => {
    db.close();
  });
