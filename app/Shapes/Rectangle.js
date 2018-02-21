export class Rectangle {
	
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};
	
	Intersects(entity){
		if(typeof(entity) == typeof(Rectangle)){
			// Do rectangle collision checks
		}
	};
	
};
