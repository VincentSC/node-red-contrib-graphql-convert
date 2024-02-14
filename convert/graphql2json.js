const {graphql2Json} = require("graphql-query-to-json")

module.exports = function(RED) {
    "use strict";

    function Graphql2JsonConverter(n) {
        RED.nodes.createNode(this,n);
 
        });
    }

    RED.nodes.registerType("graphql2json",Graphql2JsonConverter);
}
