import { EntityManager } from '../Managers/EntityManager.js';
import { Screen } from '../Screen/Screen.js';

export class DependencyManager {
    
    constructor(){
        this.entity_manager = new EntityManager();
        this.screen = new Screen();
    }
    
    getEntityManager(){ 
        return this.entity_manager;
    }
    
    getScreen(){
        return this.screen;
    }
    
}