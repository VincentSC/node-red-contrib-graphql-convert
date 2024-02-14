const {json2Graphql} = require("json-to-graphql-query")

module.exports = function(RED) {
    "use strict";

    function Json2GraphqlConverter(n) {
        RED.nodes.createNode(this,n);
 
        });
    }

    RED.nodes.registerType("json2graphql",Json2GraphqlConverter);
}
