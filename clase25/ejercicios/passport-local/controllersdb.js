const mongoose = require('mongoose');

let baseDeDatosConectada = false;

function conectarDB(url, cb) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      if(!err) {
        baseDeDatosConectada = true;
      }
      if(cb != null) {
        cb(err);
      }
  });
}

module.exports = {
  conectarDB
}