
module.exports = function(app){

    // All defined endpoints
    app.use('/get', (req, res) => {
        res.status(200).send("Hello");
    })

    // All undefined endpoints
    app.use((req, res) => {
        res.status(404).json({message : '404 - Not found'});
    })
}