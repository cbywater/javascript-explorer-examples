"use strict";

require("6to5/polyfill");

var key = Symbol();
var obj = {};

obj[key] = "scoped property";
