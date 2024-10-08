```javascript
const express = require("express");
```

the above code line means that we are requiring express i.e., the express dependency that we installed in our project (node modules now contains all the dependency code) and we make a `express` variable out of it. And using the same `express` variable we make a factory function `app`.

in a computer we have multiple ports, so we use one of those freely available virtual ports so that the server that can use that port to listen to various incoming requests.

```javascript
app.get("/", (req, res) => {
	res.send("Hello World!");
});
```

the above code snippet means that while listening to various incoming request, when we come across a `get` request on home route `/`, execute the callback which is given as the second parameter of the `get` method of `app`. This callback has 2 parameters `req` & `res` and the `res` param is used to send back a message `hello world`

```javascript
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
```

the above code snippet is used so that the app should start to listen to incoming request. This method has 2 params:

- the port number on which it listens to the requests
- the callback which is executed when the server is ran and usually a clg message is given to verify whether the server is running properly or not on the specified port in the terminal

the biggest diff b/w normal js code and express code is that when the code file is ran, the code is executed but the file does not get closed, instead it listens continously to the incoming req on the specified port number (it also means that now we have a server which is continously listening to the incoming req on the specified port number)

now by running the express code file, server will start and the output can be checked by going to `localhost:${portNumber}` and the res can be seen there for the specified routes

> ### PTR: while specifying the routes for the server using `app.get()` method, always use a `/` in the string parameter to avoid errors.

after making new changes to the server, it needs to be restarted again to see new changes bcz nodejs does not support hot reload by default if we use the `node fileName.js` script to run the server.

to make sure that the server gets restarted after every new change in the file, we can use the following script: `node --watch fileName.js`

> ### TODO: Git SSH Setup

> ### never ever push `.env` file to github, so always add it to `.gitignore` file.

> To See how to deploy express app on production, see the video [Deploy Backend code to production](https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2) from the timestamp `35:30`
