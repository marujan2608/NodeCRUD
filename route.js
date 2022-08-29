module.exports = function (app){
    app.use('/api/v1/students', require('./src/student'));
    app.use('/api/v1/teachers', require('./src/teacher'));
}