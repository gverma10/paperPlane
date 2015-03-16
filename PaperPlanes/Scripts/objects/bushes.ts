module objects {

    export class Bushes extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dy = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("bushes"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.y = 0;
            this.x = 1000;
        }

        private _checkBounds() {
            if (this.x <= (0 - this.width)) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.x -= this._dy;

            this._checkBounds();
        }


    }

}   