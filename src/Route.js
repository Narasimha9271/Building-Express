module.exports = Route;
var methods = require("methods");
// Removed the array-flatten import
var Layer = require("./Layer");

function Route(path) {
    this.path = path;
    this.stack = [];
    this.methods = {};
}

Route.prototype.dispatch = function dispatch(req, res, done) {};

methods.forEach(function (method) {
    Route.prototype[method] = function () {
        // Using flat() method to flatten the arguments array
        var handles = Array.prototype.slice.call(arguments).flat();

        for (var i = 0; i < handles.length; i++) {
            var handle = handles[i];

            if (typeof handle !== "function") {
                var type = toString.call(handle);
                var msg =
                    "Route." +
                    method +
                    "() requires a callback function but got a " +
                    type;
                throw new Error(msg);
            }

            var layer = new Layer("/", {}, handle); // Ensure Layer is correctly instantiated
            layer.method = method;

            this.methods[method] = true;
            this.stack.push(layer);
        }

        return this;
    };
});
