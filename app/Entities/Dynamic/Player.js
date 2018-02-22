import { Rectangle } from '../../Shapes/Rectangle.js';
import { Entity } from '../Entity.js';

export class Player extends Entity {

        constructor(collision_bounds, dm){
            super(collision_bounds, dm);
        }

	Tick(em)
	{
            let entities = em.GetEntities();
            let self = this;

            if (this.dm.getKeyManager().IsButtonActive(82)) {
                this.collision_bounds.x += 5;
            }

            entities.map(function(item, index){
                if(item == self) return 0;

                if(self.collision_bounds.Intersects(item.collision_bounds)){
                    // To-Do recalculate position
                }
            });
	};

	Render(screen)
	{
            screen.graphics.beginFill(0x9b59b6); 
            screen.graphics.drawRect(this.collision_bounds.x, this.collision_bounds.y, this.collision_bounds.width, this.collision_bounds.height);
            screen.graphics.endFill();

            screen.stage.addChild(screen.graphics);
            screen.renderer.render(screen.stage); 
	};

};