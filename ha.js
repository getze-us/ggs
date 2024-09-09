// npm install humanoid-js
const Humanoid = require('humanoid-js');

// create a new humanoid instance
const humanoid = new Humanoid();

// send Get request to the target website
humanoid
    .get('https://gota.io')

    .then((res) => {
        // print the result
        console.log(res.body);
    })
    // catch errors if any
    .catch((err) => {
        console.log(err);
    });
