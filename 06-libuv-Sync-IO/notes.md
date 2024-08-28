# libuv and Sync IO

- NodeJS is an `event driven architecture capabile of asynchronous I/O`. What does these two keywords mean?

- Lets start with JS
    - JS is a synchronous single threaded language.. what does it mean?
        - single thread and on that thread we are runnng JS Engine
    - JS is synchronous, nodejs can perform asynchronous with super power (dependencies)
    - NodeJS uses superhero (libuv) to connect v8 engine to Operating system
        - example if in Node JS engine need to do file operation, network call this gets offloads asynchronus task (delegated) to libuv
        - kind of Genie 😃

- libuv is a multi platform c library that provides support for async I/O based on event loops