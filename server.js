const express = require("express");
const app = express();
const db = require('better-sqlite3')('levels.db',{ verbose: console.log });

db.prepare(`CREATE TABLE "levels" (
	"level"	TEXT NOT NULL UNIQUE,
	"JSON"	TEXT NOT NULL
);`);
//db.prepare(`INSERT INTO levels VALUES ("amogus", "{}")`);
db.close();

app.use(express.static("public"));



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});