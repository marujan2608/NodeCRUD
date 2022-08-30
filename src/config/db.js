const dbConfig = {
    mongo: {
        url: 'mongodb://localhost:27017',
        dbName: 'fCRUD'
    }
}

module.exports = dbConfig;

// dbConfig.mongo.attribute.place
// dbConfig.mongo.attribute.marks.maths[1]

// for(i=0; i<dbConfig.mongo.attribute.marks.maths[i].length; i++)
//    dbConfig.mongo.attribute.marks.maths[i];

// const arr = [10, 20, 30, 40, 50];
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }