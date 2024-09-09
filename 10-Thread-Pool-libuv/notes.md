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

- Scalable I/O Event Notification Mecanism
LibUV interact with OS using epoll
    - epoll (linux) - epoll socket descriptor
        - epoll is a scalable I/O event notification mechanism provided by the Linux kernel. It is used to efficiently monitor multiple file descriptors to see if I/O is possible on any of them. In the context of libuv and Node.js, epoll is one of the underlying mechanisms used to implement the event loop on Linux systems.
        - A file descriptor is a low-level integer handle used to identify an open file or other I/O resource, such as a socket or pipe, within an operating system. In Node.js, file descriptors are used to perform various I/O operations.
    - kqueue (mac os)
    - epoll can handle multiple connections
    - Read more about
        - Event Emitter
        - Streams and Buffers
