import Player from './player.js';

// 游戏管理类；
class Game {
    constructor() {
        this.player = null;
    }
    login(name) {
        this.player = new Player(name);
        this.player.heroes.forEach(hero => {
            hero.trigger('heroInit');
        });
    }
}
let instance = null;
export default function() {
    if(!instance){
        instance = new Game();
    }
    return instance;
}
