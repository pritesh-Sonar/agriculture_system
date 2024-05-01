const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    Quote : {
        type : String,
        require : true
    },
    Descrip1 : {
        type : String,
        require : true
    },
    Descrip2 : {
        type : String,
        require : true
    },
    Descrip3 : {
        type : String,
        require : true
    },
});


const Updates = mongoose.model("Updates", updateSchema);

module.exports = Updates;