const express = require("express");
const app = express();
const db = require('better-sqlite3')('levels.db',{ verbose: console.log });

app.use(express.static("public"));
app.use(express.json());

const listener = app.listen(process.env.PORT, async () => {
  console.log("Your app is listening on port " + listener.address().port);
  console.log(await db.prepare(`SELECT * FROM Levels`).all());
  //await db.close();
});

app.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.get("/insert/:a/:b", (req, res) => {
  try {
    insert(req.params.a, req.params.b);
    res.send("Success");
  } catch(e) {
    res.send(e);
  }
});

const insert = db.transaction(async (a, b) => {
      await db.prepare(`INSERT INTO levels VALUES (?, ?)`).run(a, b);
});