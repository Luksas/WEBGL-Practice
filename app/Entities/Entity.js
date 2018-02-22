import { Rectangle } from '../Shapes/Rectangle.js';

export class Entity {
	
    constructor(collision_bounds, dm) {
        this.collision_bounds = collision_bounds;
        this.dm = dm;
    };

    Tick(em){};

    Render(screen){};
	
};