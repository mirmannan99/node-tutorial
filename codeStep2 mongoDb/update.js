const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "note 10 pro max" },
    {
      $set: { name: "note 10 pro max", brand: "mi" },
    }
  );
  console.warn(result);
};

updateData();
