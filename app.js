
const router = require('./route');
const {connect} = require('./src/db/mongo');

module.exports = function(app){

    // All defined endpoints
    router(app);
    connect();
    // app.use('/sam', (req, res) => {
    //     res.status(200).json({message : 'Hello'});
    // })

    // All undefined endpoints
    app.use((req, res) => {
        res.status(404).json({message : '404 - Not found'});
    })

    // All unhandled error
    app.use((err, req, res) => {
        res.status(500).json({message : '500 - Internal server error', error : err});
    })
}