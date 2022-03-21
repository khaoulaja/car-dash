const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/car-dash', {
<<<<<<< HEAD
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

module.exports = mongoose.connection;
=======
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
>>>>>>> 2820fb506445b258898f3cecbbff83934ee3fee7
