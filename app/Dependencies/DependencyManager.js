import { EntityManager } from '../Managers/EntityManager.js';
import { Screen } from '../Screen/Screen.js';
import { EntityFactory } from '../Factories/EntityFactory.js';
import { KeyManager } from '../Inputs/KeyManager.js';

export class DependencyManager {
    
    constructor(){
        this.entity_manager = new EntityManager();
        this.screen = new Screen();
        this.key_manager = new KeyManager();
        this.entity_factory = new EntityFactory(this);
    }
    
    getKeyManager(){
        return this.key_manager;
    }
    
    getEntityFactory(){
        return this.entity_factory;
    }
    
    getEntityManager(){  
        return this.entity_manager;
    }
     
    getScreen(){
        return this.screen;
    }
    
}