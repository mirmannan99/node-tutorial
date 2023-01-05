// const express = require("express");
// const reqFilter = require("./middleware");

// const app = express();
// const route = express.Router();
// const port = 3000;

// route.use(reqFilter); //? group the routes to use middlewares

// // app.use(reqFilter); //? to use the application level middle ware

// app.get("/", (req, res) => res.send("Hello World!"));

// app.get("/users", reqFilter, (req, res) => res.send("Welcome to Users Page"));

// route.get("/about", (req, res) => res.send("Welcome to about Page"));

// route.get("/contact", (req, res) => res.send("Welcome to contact Page"));

// app.use("/", route);

// app.listen(port, () => console.log(` app listening on port ${port}!`));

//#31 connection and working of the mongo db

// "use strict";
// const { MongoClient, Collection } = require("mongodb");
// // const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";
// const database = "e-comm";

// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("products");

//   let resposne = await collection
//     .find({
//       name: "x",
//     })
//     .toArray();
//   console.log(resposne);
// }
// dbConnect().then((resp) => {
//   //! handle the promise from the connection
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       //! handle the promise from the query
//       console.warn(data);
//     });
// });

// const main = async () => {
//   let data = await dbConnect();  //! using async await
//   data = await data.find().toArray();
//   console.warn(data);
// };

// main();

// (async () => {
//   let data = await dbConnect();  //! using the function with the help of the Iffe
//   data = await data.find().toArray();
//   console.warn(data);
// })();
