# Thread Pool in LibUV

- Think of thread like a container which is used to execute the code
- Whenever async operatios is offloded to libuv, libuv finds a thread from thread pool and run the operation on that thread example file operation
- When the thread is occupied, it cannot be used for any other operations
- UV Thread Pool size == 4 i.e. 4 threads in thread pool by default
    - if all the threads are occupied, job / code to be executed needs to wait till we have thread in thread pool
    - thread pool size can be increased by using environment variable `process.env.UV_THREADPOOL_SIZE = size`

- When Libuv uses thread pool
    - fs
    - dns.lookup in dns module
    - crypto methods
    - do some more research on this

- Is NodeJS single threaded or multi threaded?
    - if its sync code, its single threaded
    - if its async code, and code is offloaded to libuv, then its multithreaded
