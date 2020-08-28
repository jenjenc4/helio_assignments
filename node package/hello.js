let colors = require('colors/safe');

function sayHello(){
    console.log(colors.green("Hello World"))
}
Module.exports.sayHello = sayHello
