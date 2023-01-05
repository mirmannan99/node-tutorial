const express = require("express");
const mongodb = require("mongodb");

const dbConnect = require("./mongodb");
const app = express();

app.use(express.json()); //!to convert all post data to json

app.get("/", async (req, res) => {
  //! getting data from the mongo DB
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  //! post api in mongo DB
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.put("/update/:name", async (req, res) => {
  //! put api in mongo DB
  console.log("api hit");
  console.log(req.params.name);
  let data = await dbConnect();
  let result = data.updateMany(
    {
      name: req.params.name,
    },
    {
      $set: req.body,
    }
  );
  res.send({ result: "update" });
});

app.delete("/delete/:id", async (req, res) => {
  //! delete in mongodb
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(3000, () => {
  console.warn("connection started on 3000");
});
