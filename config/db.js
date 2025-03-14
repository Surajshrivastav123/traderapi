const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MongoDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => {
        console.log(`DB not connected successfully: ${err}`);
        process.exit(1);
    });
};

module.exports = connect;
