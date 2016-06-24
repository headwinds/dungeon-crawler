# 'The Grid' - Rougelike Dungeon Crawler (React and Redux)

A 2D Dungeon Crawler implemented in React and Redux, including `redux-thunk` and `redux-batched-actions` middleware.

Check out the live demo [here](https://thepeted.github.io/dungeon-crawler).


## Features

All the features of the master but rendered with SVG


## Run locally

Checkout this repo and
```
> npm install
> npm start
```
The game will be running at http://localhost:8080/

If it fails to run, try installing [webpack](https://webpack.github.io/) 

$ npm install webpack -g 

This is a handy [webpack how to](https://github.com/petehunt/webpack-howto)

Once webpack is install, you should be able to:

$ webpack --watch 

This will install the file and watch for changes.

If you open another terminal, go to this directory and run a server using Python or fire up Mamp. 

$ python -m SimpleHTTPServer 8080

Open a browser to http://0.0.0.0:8080/build/
