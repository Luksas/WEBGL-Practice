export class EntityManager {
	
	constructor(){
		this.entities = [];
	};
	
	GetEntities(){
		return this.entities;
	};
	
	Add(entity)
	{	
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
		this.entities.map(function(item, index){
			item.Tick(em);
		});
	};

	Render(screen)
	{
		let self = this;
		this.entities.map(function(item, index){
			item.Render(screen);
		});
	};
};