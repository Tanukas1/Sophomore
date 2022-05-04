const express = require("express");
const app = express();
const userManager = require("./routers/userManager");
const novelManager = require("./routers/novelManager");
const util = require("./routers/utils");
const port = process.env.PORT || 5000;
const cors = require("cors");

// to parse json data from client
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("./static"));

app.use("/user", userManager);
app.use("/novel", novelManager);
app.use("/utils", util);

app.get("/home", (req, res) => {
  console.log("client request on server");
  res.send("Request on home");
});



app.listen(port, () => {
  console.log(`Server started on port localhost : ${port}`)
});
