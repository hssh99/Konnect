const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Harshal", lastName: "Shirke" });
})

app.post("/user", (req, res) => {
    // saving data to DB
    res.send("Data successfully saved to the database!");
})

app.delete("/user", (req, res) => {
    res.send("Deleted successfully!")
})

// this will match all the HTTP method API call to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server!");
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});