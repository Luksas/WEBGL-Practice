export class EntityManager {
	
    constructor(){
        this.entities = [];
    };

    GetEntities(){
        return this.entities;
    };

    Add(entity)
    {	
        console.log(this);
        this.entities.push(entity);
    };

    Remove(entity)
    {
        let index = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
        }
    };

    Tick()
    {
        let self = this;
        
        if (this.AreEntitiesUndefined()) {
            return;
        }
        
        this.entities.map(function(item, index){
            item.Tick(self);
        });
    };

    Render(screen)
    {
        this.entities.map(function(item, index){
            item.Render(screen);
        });
    };
    
    AreEntitiesUndefined(){
        return this.entities === undefined;
    }
    
};