const express = require("express");

const app = express();

// const { adminAuth, userAuth } = require("./middlewares/auth")

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
// app.use("/admin", adminAuth)

// app.get("/admin/getAllData", (req, res) => {
//     res.send("All Data Sent");
// })

// app.get("/admin/deleteUser", (req, res) => {
//     res.send("Deleted a user");
// })

app.get("/getUserData", (req, res) => {
    try {
        // Logic of DB call and get user data

        throw new Error("dvjnnf");

        res.send("User Data Sent");
    } catch (error) {
        res.status(500).send("Some Error contact support team");
    }

})

app.use("/", (err, req, res, next) => {
    if (err) {
        // Log your error
        res.status(500).send("something went wrong");
    }
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});