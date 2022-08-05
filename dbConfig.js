const mongodb=require('mongodb');
require('dotenv').config()
const MongoClient=mongodb.MongoClient;
const dbUrl=`mongodb+srv://subashanraj:Furious95@raj.gx86x.mongodb.net/${process.env.MONGODB_DB_NAME}`;
const dbName= process.env.MONGODB_DB_NAME;
module.exports={mongodb,MongoClient,dbName,dbUrl};