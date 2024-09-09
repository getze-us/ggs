const CloudflareBypasser = require('cloudflare-bypasser');

let cf = new CloudflareBypasser();

cf.request('https://gota.io')
.then(res => {
 console.log(res); // res - full response
});
