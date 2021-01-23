console.log('hello node')
const module = require('./module.js')
module.hello();
module.goodbye();


import common from './module.js';
common.hello();
common.goodbye();