const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth")

// app.use("/route", rH, rH2, rH3, rH4, rH5);

// app.use(
//     "/user",
//     (req, res, next) => {
//         console.log("Handling the route user!!");
//         // next();
//         res.send("Response!!");
//     },
//     (req, res) => {
//         console.log("Handling the route user 2!!");
//         res.send("2nd Response");
//     }
// )

// Handle Auth Middleware for all GET, POST, ... requests
app.use("/admin", adminAuth)

app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
})

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});