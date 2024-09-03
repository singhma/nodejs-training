# Deep Dive into v8 JS Engine

When you write code and pass it to v8 engine, below are steps

## Step 1 -  Parsing
    1. Lexical Anaykis
    - lexical analysis (tokenization) happen at this stage 
    - code is converted into small tokens

    2. Syntax analysis
    - Abstract Syntax Tree (AST) is created by tokens or token are converted to AST
    - to see AST go to astexplorer.net (translates code to AST)

## Step 2- Interpretter
- Types of Language
    - Difference bw interpretter / Compiled language
    - Interpretted
        - line by line 
        - fast initial execution
    - Interpretter is there
    
    - compiled
        - entire code is compiled into machine code 
        - initial heavy but fast execution
        - compiler is there

    - What is Javascript
        - JS has interpretter and compiler
        - Compilation method in JS is known as JIT (JIT) Compilation
        - What is JIT?
            - 
- AST is passed to interpretter
    - Google v8 Engine has interpretter  called ignition
        - convert code into bytecode
        - code is executed
        - where does compiler come into this?
            - v8 enginer compiler is called turbofan compiler
                - ignition intepretter finds the code that is executed/used alot, ignition interpreter passes that code (hot, code that can be optimised) to turbofan compiler
                    - then turbofan compiler converts it into optimised machine code
                        - then this optimised machine code is executed
                            - code is also deoptimised
                    
- Garbage collection in v8 ( google about it) - Each GC is using different algorithm
    - ORINOCO
    - OILPAN
    - SCAVANGER
    - MC 



