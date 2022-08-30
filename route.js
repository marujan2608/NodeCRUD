module.exports = function (app){
    app.use('/api/v1/students', require('./src/api/student'));
    app.use('/api/v1/teachers', require('./src/api/teacher'));
}