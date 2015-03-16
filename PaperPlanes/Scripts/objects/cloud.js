var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Cloud() {
            _super.call(this, "cloud");
            this.soundString = "thunder";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._reset = function () {
            // set the island to start at a random x value
            this.y = Math.floor(Math.random() * 200) + 10;
            this.x = 1000 + this.width;
            // add drift to the cloud 
            this._dx = Math.floor(Math.random() * 3) + 3;
            this._dy = Math.floor(Math.random() * 1);
        };
        Cloud.prototype._checkBounds = function () {
            if (this.x < (0 - this.width)) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map