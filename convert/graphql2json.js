const { graphQlQueryToJson } = require("graphql-query-to-json")

module.exports = function(RED) {

    function Graphql2JsonConverter(n) {
        RED.nodes.createNode(this,n);
        let node = this;
		this.on('input', function(msg, send, done) {
			send = send || function() { node.send.apply(node,arguments) }
			let variables = msg.payload.variables;
			if (!variables) variables = {};
			msg.payload.json = graphQlQueryToJson(msg.payload.graphql, { variables: variables } );
			send(msg);

			if (done) {
				done();
			}
        });
    }

    RED.nodes.registerType("graphql2json", Graphql2JsonConverter);
}
