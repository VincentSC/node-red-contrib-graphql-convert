module.exports = function(RED) {
    "use strict";

    function TypeConverter(n) {
        RED.nodes.createNode(this,n);
        this.convertTo = n.convertTo;
        var node = this;

        this.on('input', function (msg) {
            node.warn("I saw a payload: "+msg.payload+" ("+typeof msg.payload+")");
			
			if (this.convertTo === "string")  msg.payload = String(msg.payload);
			if (this.convertTo === "number")  msg.payload = Number(msg.payload);
			if (this.convertTo === "boolean") msg.payload = Boolean(msg.payload);
			
			node.warn("... and I converted it to "+msg.payload+" ("+typeof msg.payload+")");
            node.send(msg);
        });
    }

    RED.nodes.registerType("convert",TypeConverter);
}
