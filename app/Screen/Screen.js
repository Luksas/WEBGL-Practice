export class Screen {

	constructor(){
		this.renderer =PIXI.autoDetectRenderer(720, 364, { backgroundColor: 0x000000, antialias: true });
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
		this.graphics = new PIXI.Graphics();
	};
	
};