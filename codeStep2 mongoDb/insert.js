const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "note 10",
      brand: "redmi",
      price: 320,
      category: "mobile",
    },
    {
      name: "note 11 pro",
      brand: "redmi",
      price: 360,
      category: "mobile",
    },
    {
      name: "samsung s10",
      brand: "samsung",
      price: 1220,
      category: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
