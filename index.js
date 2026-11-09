const express = require('express');
var { MongoClient} = require('mongodb')
var mongoserver = new MongoClient("mongodb://localhost:27017")
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const userapi = require('./user/users');

const Server = express();

Server.use(express.json());
Server.use(cors());
Server.use("/user",userapi);


Server.listen(process.env.PORT)