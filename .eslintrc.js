module.exports = {
    "extends": "standard",
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "rules": {
    },
};