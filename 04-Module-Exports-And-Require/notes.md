# Module.exports and Require

- In node js application, there is an entrypoint that you need to pass to nodejs application, in our case its app.js `node app.js`.
- How will you include code from seperate files. Example in our case is xyz.js, official term for this file is `seperate module`

  - if you want to include other modules into you main module, use `require {path}` example `require ('./xyz.js')`
    - `extension in our case .js is optional` when using require
  - first the code of imported file will be executed followed by rest of the code in main module
  - when you use `require`, you cannot access variables, methods and functions defined in another module, simply by using require as `module protects their variables and functions from leaking`
  - if you want to make functions and variables to be available in other modules, you will need to explicitly export by using `module.exports` and then import them using `require` example `const calculateSum = require('/.sum.js)`
  - if you want to export multiple functions and variables, you need to wrap it inside an object

  ```
  // Exporting via old way

  // module.exports = {
  //     x:x,
  //     calculateSum : calculateSum,
  // }

  // Exporting post ES6

  // module.exports = {
  //     x,
  //     calculateSum,
  // }

  // Importing
  const obj = require('./sum.js)
  ```

  - instead of importing as an entire object, another option is to do destructuring example below

  ```
  // Performing Destructuring
  const {x, calculateSum} = require('./sum.js)

  ```

  - module.exports and require are `Common JS Modules (CJS)`, there is another patten known as ES Modules (mjs)

  | Common JS Module (cjs) | ES Modules (mjs) |
  | ---------------------- | ---------------- |
  | module.exports         | Item2.1          |
  | require                | Item2.2          |
  | Item1.3                | Item2.3          |
  | Item1.4                | Item2.4          |
