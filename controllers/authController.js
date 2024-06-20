const db = require("../models/db");
const modelAdmin = db.admin;
const modelAkunMember = db.memberAccount;
const modelMember = db.member;
const modelRiwayat = db.alurPendidikan;
const modelinsertlog = db.insert_log;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.loginAdmin = async (req, res) => {
    try{
        const {username, password} = req.body;
        const account = await modelAdmin.findOne({where: {username: username}});
        if(!account){
            res.status(401).json({response: "username or password is incorrect"});
            return;
        }
        const passValid = await bcrypt.compare(password, account.password);
        if(!passValid){
            res.status(401).json({response: "username or password is incorrect"});
            return;
        }
        const payload = {username: account.username, role: "admin"};
        const jwtToken = jwtSigning(payload);
        res.status(200).json({response: "login success", token: jwtToken});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.registerAdmin = async (req, res) => {
    try{
        const username = req.body.username;

        const data = await modelAdmin.findOne({where: {username: username}});

        if(data){
            res.status(400).json({response: `Admin dengan username ${username} sudah terdaftar, gunakan username lain`});
            return;
        }

        const unhashedPass = req.body.password;
        const password = await bcrypt.hash(unhashedPass, 10);

        await modelAdmin.create({
            username,
            password
        });
        res.status(200).json({response: `Akun Admin ${username} telah didaftarkan`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

exports.registerMember = async (req, res) => {
    try{
        const { namalengkap, email, username} = req.body;

        const data = await modelAkunMember.findOne({where: {username: username}});

        if(data){
            res.status(400).json({response: `Member dengan username ${username} sudah terdaftar, gunakan username lain`});
            return;
        }

        const unhashedPass = req.body.password;
        const password = await bcrypt.hash(unhashedPass, 10);
        const tanggal_input = Date.now();
        const newMember = await modelAkunMember.create({
            email,
            username,
            password
        });
        const nama = namalengkap;
        await newMember.createMember({nama});
        await modelinsertlog.create({
            nama,
            email,
            username,
            tanggal_input
        });
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
        const payload = {username: account.username, role: "member"};
        const jwtToken = jwtSigning(payload);
        res.status(200).json({response: "login success", token: jwtToken});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}

function jwtSigning(payload){
    const options = {
        expiresIn: process.env.EXPIRATION_TIME
    };
    return jwt.sign(payload, process.env.SECRET_KEY, options);
}

exports.deleteMemberAccount = async (req, res) => {
    try{
        const id = req.params.accountMemberId;

        await modelRiwayat.destroy({where: {memberId: id}});
        await modelMember.destroy({where: {memberAccountId: id}});
        await modelAkunMember.destroy({where: {id: id}});

        res.status(200).json({response: `Akun member dengan id ${id} telah dihapus`});
    }catch(err){
        res.status(500).json({response: err.message});
    }
}