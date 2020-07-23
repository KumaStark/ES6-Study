import Hero from '../hero.js';
export default class Yase extends Hero {
    constructor(){
        super("亚瑟",["yase1","yase2","yase3"],['301660','301661','301662'],['16610','16620','16630']);
    }
}

// import S16610 from '../skills/s16610.js';
// import S16620 from '../skills/s16620.js';
// import S16630 from '../skills/s16630.js';

// export default class Yase extends hero {
//     constructor(){
//         this.name = "亚瑟";
//         this.ico = "./sources/heros/yase1.png";
//         this.skills = [new S16610,new S16620,new S16630];
//     }
// }