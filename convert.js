const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("ships.csv") // 👈 your CSV file name
  .then((jsonObj) => {
    fs.writeFileSync("data/ships.json", JSON.stringify(jsonObj, null, 2));
    console.log("✅ Converted to JSON");
  });