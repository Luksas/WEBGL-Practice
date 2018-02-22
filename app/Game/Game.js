import { DependencyManager } from '../Dependencies/DependencyManager.js';
import { Player } from '../Entities/Dynamic/Player.js';
import { Rectangle } from '../Shapes/Rectangle.js';
import { GameState } from '../Gamestates/GameState.js';
import { InGameState } from '../Gamestates/InGameState.js';
import { MenuState } from '../Gamestates/MenuState.js';

export class Game {

    // To-do gamestate list (manager)
    // To-do, active gamestate
    // To-do gamestate switching

    constructor(){
        this.dm = new DependencyManager();
        this.em = this.dm.getEntityManager();
        this.screen = this.dm.getScreen();
        
        this.current_gamestate = new InGameState(this.dm);
    }
    
    Start(){
        this.current_gamestate.Init();

        setInterval(() => {
            this.current_gamestate.Tick();
            this.screen.Render();
            this.current_gamestate.Render(this.screen);
        }, 30);
    }
    
    Init(){
        
    }
    
    
}