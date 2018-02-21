export class Entity {
	
	constructor(collision_bounds) {
		console.log("created entity");
		this.collision_bounds = collision_bounds;
	};
	
	Tick(em){};

	Render(screen){};
	
};