'use strict';

module.exports = function(message) {

  if(process.env)
  console.log(`Welcome ${message}`);
  console.log(`NODE_ENV ${process.env.NODE_ENV}`);
};