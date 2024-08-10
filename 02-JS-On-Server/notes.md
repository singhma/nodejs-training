# JS on Server
- JS on Server + JS on Client gave birth to the term Full Stack and framework like MERN and MEAN came into existence as same developer can do client / server side coding using Node JS 

- Node JS uses chrome v8 JS engine which is written in [c++](https://github.com/v8/v8)

- Node JS is a c++ application with v8 engine embedded into it
- Node JS is built using c++ & js

## What is v8 engine
- V8 is [Google’s](https://v8.dev/) open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js
- implements ECMAScript and WebAssembly
- runs on Windows, macOS, and Linux systems
- `v8 engine can be embedded into any c++ application, this is the reason that led to the invention of nodejs`
- job of v8 engine is to execute javascript code
    - when you write some javascript code ==> code is read by v8 engine (c++ program) ==> converted into machine level code ==> gets executed by the machine


> :question: **Why is Node.js needed when the V8 engine can execute JavaScript code, or why can't we just run the V8 engine on any server to execute JavaScript**

- V8 is JS engine that follows ECMA Script standards (`rules for scripting languages`)
- Node JS (C++ App)= v8 Engine + Extra Super Power ==> when run on the servers makes it very powerful
    - Super Powers = API on Servers (database, networks, files and so on)
    - Node JS runtime = v8 Engine + Extra Super Power (JS)

# V8 is a c++ code.. what does that mean?

## High Level Languages (C++ , JS)
- languages used by most of the developers
- HLL takes the code and converts into Low Level Code

## Low-Level Code
Low-level code refers to programming languages or code that is closer to machine language and hardware, providing little abstraction from the computer’s architecture. It allows for fine-grained control over system resources, making it essential for system programming and performance-critical applications.

## Key Points About Low-Level Code
### Machine code: 
The most basic form of low-level code, consisting of binary (0s and 1s) instructions that the computer’s CPU can directly execute. This is the only language that CPUs can understand natively.

### Assembly code: 

A step above machine language, assembly language uses symbolic representations (mnemonics) for operations and memory addresses, making it somewhat easier for humans to read and write. Each assembly instruction corresponds to a specific machine language instruction, and it allows programmers to write code that is closely tied to the hardware.

### Binary Code (language of zeros and ones)