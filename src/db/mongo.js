const dbConfig = require('../config/db');
const {MongoClient, Db} = require('mongodb');

const url = dbConfig.mongo.url;
const dbName = dbConfig.mongo.dbName;
let db;

const client = new MongoClient(url);

const connect = async () => {
    try{
        const con = await client.connect();
        db = con.db(dbName);
        console.log('Connected');
    }catch(error){
        console.log('Error');
    }
}

module.exports = {db, connect};

// async function run(){
//     try{
//         await client.connect();

//         await client.db(dbName);
//         console.log('Success');
//     }catch(e){
//         console.error(e);
//     }finally{
//         await client.close();
//     }
// }

// run().catch(console.dir);