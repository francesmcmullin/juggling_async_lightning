// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  progress = require('bespoke-progress'),
  vcr = require('bespoke-vcr'),
  simpleSlide = require('bespoke-theme-simple-slide');

// Bespoke.js
bespoke.from('article', [
  keys(),
  touch(),
  vcr({
    recording: [
      { "command": "next", "timeout": 100 },
      { "command": "next", "timeout": 15000 },
      { "command": "next", "timeout": 50000 }, // 50s
      { "command": "next", "timeout": 100000 }, // 100s
      { "command": "next", "timeout": 130000 }, // 130s
      { "command": "next", "timeout": 150000 }, // 150s
      { "command": "next", "timeout": 180000 }, // 180s
      { "command": "next", "timeout": 230000 }, // 230s
      { "command": "next", "timeout": 295000 }, // 295s
    ]
  }),
  simpleSlide(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
  require('prism');

