"use strict";
const dbConnect = require("./mongodb");

const main = async () => {
  let data = await dbConnect(); //! using async await
  data = await data.find().toArray();
  console.warn(data);
};

// main();
