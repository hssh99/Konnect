const express = require("express");
const { userAuth } = require("../middlewares/auth");
const requestRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest");


requestRouter.post("/request/send/:status/:toUserId",
    userAuth,
    async (req, res) => {
        try {
            const fromUserId = req.user._id;
            const toUserId = req.params.toUserId;
            const status = req.params.status;

            const connectionRequest = new ConnectionRequest({
                fromUserId,
                toUserId,
                status,
            })

            const data = await connectionRequest.save();
            res.json({
                message: "Connection Request Sent Successfully!",
                data,
            })


        } catch (err) {
            res.status(400).send("ERROR: " + err.message);
        }
    })

module.exports = requestRouter;