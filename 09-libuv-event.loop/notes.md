# libuv and eventLoop
- Three major concepts inside libuv
    - Event loop
    - Callback Queues
    - Thread Pool

- Majority of the code is run inside google v8 engine but async task as we know is offloaded to libuv so that main thread is not blocked.
- Aysnc I/O task is possible in nodejs only because of libuv
- When Async operation is completed but JS Engine is still executing code, callback function has to wait inside the callback queue until v8 engine is idle.
    - there are seperate queues for timers, apis etc
    - but how the callback functions are moved from callback queue to callstack? answer is eventloop
- Event Loop
    - job is to check callstack and callback queue
    - Event loop is to check if callstack is empty, then event loop will pick callback function from callback queue and push it inside callstack so that v8 engine executes callback function

- Phases of Event Loop (clock-wise)
    - Timer Phase
        - all callback which are associated by timer i.e. by setTimeout and setInterval
        - first priorise timer callback
    - Poll Phase
        - All callbacks associated with I/O 
            - incoming connection
            - data
            - most of the callbacks will be executed in this phase
    - Check Phase
        - setImmediate
            - callbacks associated with setImmediate is considered in this phase
    - Close Phase
        - All closing operations

-  `Before Every phase, event loop will also follow inside process`
    - process.nextTick()
    - promise callbacks

- `Event loops waits at poll phase`
    - When event loop is idle i.e. there is no callbacks in any of the queues, it will wait at the poll phase.

- `Event loops behaviour at node is very different to browser` i.e. it also waits