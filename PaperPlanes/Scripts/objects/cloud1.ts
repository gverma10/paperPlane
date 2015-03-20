module objects {
    // CLOUD1 CLASS
    export class Clouding extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud1");
            this.sound = "thunder";
            this._dy = 5;
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dy;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        }

    }

}   