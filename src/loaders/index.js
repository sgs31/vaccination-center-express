module.exports = async (app) => {
    await require('./expressSettings')(app);
    console.log('Express loaded succesfully')
    return app;
}