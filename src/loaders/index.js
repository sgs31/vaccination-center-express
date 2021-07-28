module.exports = (app) => {
    
    require('../models/db');
    require('./expressSettings')(app);
    console.log('Express loaded succesfully')
    return app;

}