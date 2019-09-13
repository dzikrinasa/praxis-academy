const axios = require('axios');

let data = {
    nik: function(a) {
        console.log("1122325111233");
    },
    nama: function(b) {
        console.log("Module");
    },
    users: function() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
    }
}

module.exports = data;
