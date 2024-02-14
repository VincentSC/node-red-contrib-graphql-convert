Node-RED node that converts between graphql and json

A straightforward wrapper around two libraries:
- https://github.com/trayio/graphql-query-to-json
- https://github.com/vkolgi/json-to-graphql-query

To install in Node-RED, go to the data-directory (`.node-red` in the home-dir of Node-RED by default or `/data` in Docker), and run:
> npm install git+https://github.com/VincentSC/node-red-contrib-graphql-convert.git

Then restart Node-RED. The two nodes should pop up.
