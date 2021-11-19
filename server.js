const express = require("express");
const app = express();
const db = require('better-sqlite3')('levels.db',{ verbose: console.log });

//db.prepare(`INSERT INTO levels VALUES ("amogus", "{}")`);


app.use(express.static("public"));
app.use(express.json());

const listener = app.listen(process.env.PORT, async () => {
  console.log("Your app is listening on port " + listener.address().port);
  
  //await db.prepare(`INSERT INTO levels VALUES (?, ?)`).run("deez", "chungs");
  await db.close();
});

app.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);
});