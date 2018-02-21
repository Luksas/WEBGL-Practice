import { DependencyManager } from '../Dependencies/DependencyManager.js';
import { Player } from '../Entities/Dynamic/Player.js';
import { Rectangle } from '../Shapes/Rectangle.js';

export class Game {

    // To-do gamestate list (manager)
    // To-do, active gamestate
    // To-do gamestate switching

    constructor(){
        this.dm = new DependencyManager();
        this.em = this.dm.getEntityManager();
        this.screen = this.dm.getScreen();
    }
    
    Start(){
        this.Init();
        this.Tick();
        this.Render();
    }
    
    Init(){
        this.em.Add(new Player(new Rectangle(20, 20, 100, 100)));
    }
    
    Tick(){
        this.em.Tick();
    }
    
    Render(){
        this.em.Render(this.screen);
    }
    
    
}