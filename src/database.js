const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://user_master:05067F23CAA11@cluster0.owfqr.mongodb.net/workData?retryWrites=true&w=majority" ;

mongoose
    .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected to', db.connection.host))
.catch(err => console.log(err));
