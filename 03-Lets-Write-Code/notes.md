# Lets Write Code

- Download NodeJS from [official site](https://nodejs.org/en/download/package-manager/current)
    - NVM ( Node Version Manager)
    - prebuilt installer
- To Verify successful installation
    - `node -v`
    - `npm -v` - node package manager gets installed by default with nodejs
- Quickest way to write code into NodeJS - Node REPL (Read Evaluate Print Loop)
    - to enter in REPL mode, write node and enter, this will initiate a new program (c++ program, node given a program)
- To run the code in integration terminal (cltrl + ~)
    - run command `node js filename`
- Global Object inside NodeJS
    - Similar to global Object in console i.e. Window object provided by browser, there is a global object `global` in nodejs
    - to see global object print `console.log(global)`
    ```json
    <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
    }
    ```

- Global Object provides access to lot of properties and methods such as
    - setTimeOut
    - setInterval
- Global is provided by NodeJS and not by v8 engine similar to console where window is provided by browser and not by v8 engine
- console.log(global) != console.log(this), this prints empty object which was not the case in browser
- this, self, window, frames all point to windows object when used in the browser so in 2020 JS Committee came up with the proposition to come up with single global object named `globalThis`