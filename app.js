
module.exports = function(app){

    // All defined endpoints
    app.use('/sam', (req, res) => {
        res.status(200).send("Hello");
    })

    // All undefined endpoints
    app.use((req, res) => {
        res.status(404).json({message : '404 - Not found'});
    })

    // All unhandled error
    app.use((err, req, res) => {
        res.status(500).json({message : '500 - Internal server error', error : err});
    })
}