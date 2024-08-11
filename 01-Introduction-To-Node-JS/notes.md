# What is NodeJS
- Open source Javascript runtime environment
- built on using chrome v8 Javascript engine which is written in c++
- cross platform aka runs on mac, windows, unix
- executes javascript code outside the browser
- has an `event driven architecture capable of async io (non-blocking io)` - covered in later episodes
- wherever there is Javascript, there is javascript engine
- maintained by OpenJS Foundations (developed by Ryan Dahl in 2009)

# History of Node JS
- `2009`: Node.js was originally written by Ryan Dahl. The initial release supported macos and Linux. Its development and maintenance was led by Dahl.

        - Ryan started with the SpiderMonkey JavaScript engine, which is found in Firefox. However, within two days, he switched to V8 and never looked back.

        - Initially, Ryan was working independently, but a company named Joyent was working on something similar to Node.js. They hired Ryan to work under them, offering to fund his project — a big contribution from Joyent.

        - The original name of Node.js was “web.js,” but it was later renamed to “Node.js” because its scope extends beyond web servers.

        - The Apache HTTP Server was a blocking server, so Ryan wanted to create a non-blocking server. This is why Node.js is a non-blocking I/O. The advantage of a non-blocking server is that it can handle multiple requests with a smaller number of threads.
        

- `2010`: a package manager was introduced for the Node.js environment called npm. 

- `2011`: Microsoft and Joyent implemented a native Windows version of Node.js.The first Node.js build supporting Windows was released in July 2011.

- `2012`: Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project 

- `2014: January` - Schlueter announced that Timothy J. Fontaine would lead the project.

- `2014: December` - Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee. Unlike Node.js the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.

- `2015: February` - the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation

- `2015: September` - Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0. This brought V8 ES6 features into Node.js, and a long-term support release cycle

- `2019`: JS foundation and Node JS foundation communities were merged into Open JS foundation responsible for taking control over JS