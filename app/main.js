import Rectangle from './Shapes/Rectangle.js';
import Screen from './Screen/Screen.js';
import Entity from './Entities/Entity.js';
import Player from './Entities/Dynamic/Player.js';
import EntityManager from './Managers/EntityManager.js';

var screen = new Screen();
var em = new EntityManager();
em.Add(new Player(new Rectangle(20, 20, 100, 100)));
em.Render(screen);
