module.exports = function (wallaby) {
  return {
    debug: true,
    testFramework: 'mocha@2.1.0',
    files: [
      'src/*.js'
    ],
    tests: [
      'test/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    workers: {
      recycle: true
    },
    bootstrap: function (wallaby) {
      wallaby.testFramework.grep(/@slow/).invert();
    }
  };
};
