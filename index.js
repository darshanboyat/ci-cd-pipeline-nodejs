const express = require("express");
const _ = require("lodash");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
        <div style="background-color: black; max-height: 100vh; max-width: 100vw;">
            <h1 style="display: flex; justify-content: center; padding: 2rem 0rem; color: white;">Hello from server CI/CD pipeline</h1>
        </div>
    `);
});
app.post("/send-data", (req, res) => {
  console.log(
    "POST request received:- ",
    { hello: "Check" } == { hello: "Check" }
  );
  try {
    if (!_.isEqual(req.body, {}))
      res.status(200).json({
        message: "post request working fine..",
        data: req.body,
      });
    else throw new Error("Can not get data");
  } catch (error) {
    res.status(403).json({
      message: "An error occurred while fetching data",
      error: true,
      issue: error,
    });
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
