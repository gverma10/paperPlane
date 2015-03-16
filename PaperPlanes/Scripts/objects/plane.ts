﻿module objects {

    export class Plane extends createjs.Bitmap {
        public width: number;
        public height: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("plane"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 80;

            createjs.Sound.play("engine", { loop: -1 });

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

} 