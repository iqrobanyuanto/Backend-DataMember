const db = require("../models/db");
const model = db.admin;
const modelAkunMember = db.memberAccount;
const modelMember = db.member;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.loginAdmin = async (req, res) => {
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

exports.registerMember = async (req, res) => {
    try{
        const { namalengkap, email, username} = req.body;
        const unhashedPass = req.body.password;
        const password = await bcrypt.hash(unhashedPass, 10);
        await modelAkunMember.create({
            email,
            username,
            password
        });
        await modelMember.create({nama: namalengkap});
        res.status(200).json({response: `Akun member ${namalengkap} telah didaftarkan`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.loginMember = async (req, res) => {
    try{
        const {username, password} = req.body;
        const account = await modelAkunMember.findOne({where: {username: username}});
        if(!account){
            res.status(401).json({response: "username or password is incorrect"});
            return;
        }
        const passValid = await bcrypt.compare(password, account.password);
        if(!passValid){
            res.status(401).json({response: "username or password is incorrect"});
            return;
        }
        const jwtToken = jwtSigning(username);
        res.status(200).json({response: "login success", token: jwtToken});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

function jwtSigning(payload){
    const options = {
        expiresIn: process.env.EXPIRATION_TIME
    };
    return jwt.sign(payload, process.env.SECRET_TOKEN, options);
}