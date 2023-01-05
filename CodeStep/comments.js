// const data = require("./data");
// const fs = require("fs");

const { fstat } = require("fs");

//+ http creting server and basic api
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("listening on 3000");
//   });

// const input = process.argv; //! holds data from args from the command line

//+ manipuating file in the command line

// if (input[2] === "add") fs.writeFileSync(input[3], input[4]);
// else if (input[2] === "remove") fs.unlinkSync(input[3]);
// else console.log("invalid input");

//# 13
// const fs = require("fs");
// const path = require("path"); //!path module

// const dirPath = path.join(__dirname, "files");
// console.log(dirPath);

//+ creating and writing files in a loop
// // for (let i = 0; i < 5; i++) {
// //   fs.writeFileSync(`${dirPath}/file${i}.txt`, "a simple text file");
// // }

// //+ reading files from the directory
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log(`file name is ${item}`);
//   });
// });

//# 14
// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.text`;

// fs.writeFileSync(filePath, "THis is atest file"); //! create a file

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// }); //! read the file

// fs.appendFile(filePath, "and file name is apple test", (err) => {
//   if (!err) console.log("file updated");
// }); //! updating the file

// fs.rename(filePath, `${dirPath}/mango.text`, (err) => {
//   if (!err) console.log("file updated");
// }); //! renaming the file

// fs.unlinkSync(`${dirPath}/mango.text`) //! deleting the file;

//# 19-20

//+ rendering the html and json

// app.get("", (req, res) => {
//   res.send(`<h1>Hello this is Mannan</h1>
//   <a href="/about">go to about</a>
//   `);
// });

// app.get("/about", (req, res) => {
//   const name = req.query.name;
//   res.send(`
//   <input type="text" placeholder="User name" value="${name}"/>
//   <input type="button" placeholder="User name" value="submit"/>

//   `);
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "mannan",
//     email: "mirmannan00@gmail.com",
//   });
// });
