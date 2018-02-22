import { GameState } from './GameState.js';
import { Entities } from '../Factories/EntityFactory.js';

export class InGameState extends GameState {
    
    constructor(dm){
        super(dm);
        
        this.em = this.dm.getEntityManager();
    }
    
    Init(){
        let player = this.dm.getEntityFactory().CreateEntity(Entities.PLAYER);
        this.em.Add(player);
    }
    
    Tick(){
        this.em.Tick();
    }
    
    Render(screen){
        this.em.Render(screen);
    }
    
}