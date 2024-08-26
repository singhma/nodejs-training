# Deep Dive into Node JS repo

Covers
- How modules work behind the scene
- Deep Dive:
    - require function, 
    - module.exports, 
    - how modules is loaded, 
    - how nodejs work behind the scene when you have multiple modules and much more

- what happens when use require in module and how node js keeps variables and functions private
    - already know : nodejs gives your code to v8 engine and v8 engine executes the code
    - when you wrap some code inside a function, it creates a private space for itself and module works in the same way
        - when you use require, all the code of the module is wrapped inside a function and that function is a special function (IIFE) and any acccess to variable/functions is via (export / module.exports)

- How are variables and functions private in different modules?
    - due to IIFE and require statement as require is importing the code into IIFE

- How do you get access to module.exports? where does it come from as we have not added module.exports anywhere in the code.
    - NodeJS is adding module
    - when your code is wrapped inside a function by nodejs, this function has a parameter named module in the function... same with require

- What happens when you use `require (/path)` in your module
- Steps
    1. Resolving the module
        - check whether the module is local path, or json path or its a node:module
    2. Loading the module
        - file content is loaded according to file type
    3. wraps inside an IIFE
    4. Code Evaluation
        - code is executed and returns module.exports
    5. Caching
        - Module is cached
        - if the same module is required in multiple module, node caches the required module