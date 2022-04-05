const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome : {
        type : String,
        required: true
    },
    sobrenome : {
        type: String,
        required: true
    },
    empresa : {
        type: String,
        required: true
    },
    cargo : String,
    apelido : String,
    data_aniversario : {
        type: String,
        required: true
    },
    emails : String,
    telefones : {
        type: String,
        required: true
    },
    enderecos : {
        type: String,
        required: true
    },
    observacoes: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;