var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD1 CLASS
    var Clouding = (function (_super) {
        __extends(Clouding, _super);
        // CONSTRUCTOR
        function Clouding() {
            _super.call(this, "cloud1");
            this.sound = "thunder";
            this._dy = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Clouding.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Clouding.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Clouding.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Clouding;
    })(objects.GameObject);
    objects.Clouding = Clouding;
})(objects || (objects = {}));
//# sourceMappingURL=cloud1.js.map