import { Rectangle } from '../../Shapes/Rectangle.js';
import { Entity } from '../Entity.js';

export class Player extends Entity {

	Tick(em)
	{
            let entities = em.GetEntities();
            let self = this;

            entities.map(function(item, index){
                if(item == self) return 0;

                if(self.collision_bounds.Intersects(item.collision_bounds)){
                    // To-Do recalculate position
                }
            });
	};

	Render(screen)
	{
            console.log("Rendering player");
            screen.graphics.beginFill(0x9b59b6); 
            screen.graphics.drawRect(this.collision_bounds.x, this.collision_bounds.y, this.collision_bounds.width, this.collision_bounds.height);
            screen.graphics.endFill();

            screen.stage.addChild(screen.graphics);
            screen.renderer.render(screen.stage); 
	};

};