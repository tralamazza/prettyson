#!/usr/bin/env node

var argv = require('optimist').argv;
var inspect = require('eyes').inspector({
  maxLength: argv.l || 1024 * 32
});

var data = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
  inspect(JSON.parse(data));
});
