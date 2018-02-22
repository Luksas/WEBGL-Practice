import { Player } from '../Entities/Dynamic/Player.js';
import { Rectangle } from '../Shapes/Rectangle.js';

export const Entities = Object.freeze({
    PLAYER: 1,
    ASTEROID: 2,
    PLANET: 3
});

export class EntityFactory {
    
    constructor(dm){
        this.dm = dm;
    }
    
    CreateEntity(entity_type){
        switch (entity_type) {
            case Entities.PLAYER:
                return new Player(new Rectangle(20, 20, 100, 100), this.dm);
            default:
                break;
        }
    }
    
}