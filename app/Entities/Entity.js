import { Rectangle } from '../Shapes/Rectangle.js';

export class Entity {
	
    constructor(collision_bounds) {
        this.collision_bounds = collision_bounds;
    };

    Tick(em){};

    Render(screen){};
	
};