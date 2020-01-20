const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// // object to Json
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// // console.log(bookJSON);

// // // json to object

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

data.name = "Çağatay";
data.age = 25;

dataNew = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataNew);
