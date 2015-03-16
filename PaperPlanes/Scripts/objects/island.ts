module objects {
    // ISLAND CLASS
    export class Island extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        private _dy: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("island"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        }

    }

} 