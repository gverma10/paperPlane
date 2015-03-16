﻿module objects {
    // CLOUD CLASS
    export class Cloud extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        private _dy: number;
        private _dx: number;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("cloud"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.x += this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
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