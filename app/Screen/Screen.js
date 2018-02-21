export class Screen {

    constructor(){
        this.width = 720;
        this.height = 364;
        
        this.renderer =PIXI.autoDetectRenderer(this.width, this.height, { backgroundColor: 0x000000, antialias: true });
        document.body.appendChild(this.renderer.view);
        this.stage = new PIXI.Container();
        this.graphics = new PIXI.Graphics();
    };
	
};