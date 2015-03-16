module objects {

    export class Cloud extends objects.GameObject {
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("cloud");

            this.soundString = "thunder";

            

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();
            

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.y = Math.floor(Math.random() * 200)+10;
            this.x = 1000 + this.width;
            // add drift to the cloud 
            this._dx = Math.floor(Math.random()*3) + 3;
            this._dy = Math.floor(Math.random()*1);
        }

        private _checkBounds() {
            if (this.x < (0-this.width)) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y += this._dy;
            this.x -= this._dx;

            this._checkBounds();
        }


    }

}   