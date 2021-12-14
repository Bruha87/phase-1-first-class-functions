const { spy } = require("chai");

function receivesAFunction(callback) {
    callback(spy)
}

function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is a named function");
    };
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log("this is a anonymous function");
    };
}