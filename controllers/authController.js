const db = require("../models/db");
const model = db.admin;

// pasword belum di hash
// belum ada jwt
module.exports = async (req, res) => {
    const { username, password } = req.body;

    const account = await model.findOne({ where: { username: username } }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
    });

    if (!account) {
        res.status(401).json({ message: "username is incorrect" });
        return;
    }

    if (account.password !== password) {
        res.status(401).json({ message: "password is incorrect" });
        return;
    }

    res.status(200).json({ message: "login success" });
}