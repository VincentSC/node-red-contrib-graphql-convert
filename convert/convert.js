module.exports = function(RED) {
    "use strict";

    function TypeConverter(n) {
        RED.nodes.createNode(this,n);
        this.convertTo = n.convertTo;
        var node = this;

        this.on('input', function (msg) {
			if (this.convertTo === "string")  msg.payload = String(msg.payload);
			if (this.convertTo === "number")  msg.payload = Number(msg.payload);
			if (this.convertTo === "boolean") {
				if (typeof msg.payload === "string") {
					msg.payload = Boolean(Number(msg.payload));
				} else {
					msg.payload = Boolean(msg.payload);
				}
			}
			if (this.convertTo === "boolean (0/1)") {
				if (typeof msg.payload === "string") {
					msg.payload = Boolean(Number(msg.payload));
				} else {
					msg.payload = Boolean(msg.payload);
				}
				msg.payload = Number(msg.payload);
			}
            node.send(msg);
        });
    }

    RED.nodes.registerType("convert",TypeConverter);
}
