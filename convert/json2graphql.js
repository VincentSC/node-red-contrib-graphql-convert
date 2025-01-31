const { jsonToGraphQLQuery } = require("json-to-graphql-query")

module.exports = function(RED) {

    function Json2GraphqlConverter(n) {
        RED.nodes.createNode(this,n);
		let node = this;
		this.on('input', function(msg, send, done) {
			send = send || function() { node.send.apply(node,arguments) }
			msg.payload.graphql = jsonToGraphQLQuery(msg.payload.json, { pretty: true });
			send(msg);
		
			if (done) {
				done();
			}
		});
    }

    RED.nodes.registerType("json2graphql", Json2GraphqlConverter);
}
