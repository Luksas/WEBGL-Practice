export class KeyManager {
    
    constructor(){
        let body = document.getElementById('body');
        
        this.keys = [];
        for (var i = 0; i < 255; i++) {
            this.keys.push(false);
        }
        
        let key_manager = this;
        body.onkeydown = function(evt) {
            evt = evt || window.event;
            key_manager.keys[evt.keyCode] = true;
        };

        body.onkeyup = function(evt) {
            evt = evt || window.event;
            key_manager.keys[evt.keyCode] = false;
        };
    }
    
    IsButtonActive(id){
        return this.keys[id];
    }
    
}