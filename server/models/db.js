const mongoose = require('mongoose');

mongoose.connect('mongodb://dheeraj:dheeraj123@ds117681.mlab.com:17681/resume',
    {useNewUrlParser: true }, (err) => {
        if (!err) { console.log('MongoDB connection succeeded.'); }
        else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
    });

require('./user.model');
