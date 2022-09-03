const dbConfig = require('../config/db');
const {MongoClient} = require('mongodb');

const url = dbConfig.mongo.url;

module.exports = new MongoClient(url);

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