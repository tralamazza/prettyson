#!/usr/bin/env node

var eyes = require('eyes');

var data = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
  eyes.inspect(JSON.parse(data));
});
