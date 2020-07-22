// console.log("index.js...");
// 分析对象(根据需求)  ---> 抽离对象共性特点；--》类 --->研究类之间逻辑关系；
// 亚瑟  鲁班...  英雄对象；  技能一、技能二... 技能  皮肤对象 皮肤一、皮肤二...; 玩家对象；（登录）;
// 亚瑟  鲁班 （英雄类（基类，继承）） 技能一类  技能二类 （技能类） 皮肤一类 皮肤二类（皮肤类）；玩家类；

import Game from "./game/game.js";
let game = new Game();
// console.log(game);
// 所有的节点
let eles = {
    login:{
        loginView:document.querySelector(".login"),
        username:document.querySelector(".username"),
        loginSub:document.querySelector(".sub")
    },
    game:{
        gameView:document.querySelector(".game"),
        chioseusername:document.querySelector(".chioseusername"),
        heroView:document.querySelector(".heroView"),
        heroShow:document.querySelector(".heroShow"),
        skinShow:document.querySelector(".skinShow"), // 增加部分
        skillsView:document.querySelector(".skillsView")
    }
}

eles.login.loginSub.onclick = function () {
    let username = eles.login.username.value;
    // console.log(username);
    if(username){
        game.login(username);
        console.log(game);
        // 隐藏登录页面显示游戏页面;
        eles.login.loginView.style.display = "none";
        eles.game.gameView.style.display = "block";
        // 修改用户名；
        eles.game.chioseusername.innerHTML = username;
        renderHero(game.player.heroes);
    }
}

// 渲染英雄视图；
function renderHero(heroes){
    eles.game.heroView.innerHTML = "";
    eles.game.skinShow.innerHTML = ""; // 增加部分
    console.log(heroes);
    heroes.forEach(hero=>{
        let heroItem =  document.createElement("div");
        heroItem.classList.add("heroItem")
        heroItem.innerHTML = ` <img src="${hero.ico}" /><span>${hero.name}</span>`;
        eles.game.heroView.appendChild(heroItem);
        heroItem.onclick = function(){
            // 选中英雄呈现；
            eles.game.heroShow.innerHTML = ""; // 增加部分
            let img = document.createElement("img");
            img.src = hero.ico;
            eles.game.heroShow.appendChild(img);
            eles.game.skinShow.innerHTML = ""; // 增加部分
            let skin = document.createElement("img"); // 增加部分
            skin.src = hero.skin; // 增加部分
            eles.game.skinShow.appendChild(skin); // 增加部分
            renderSkills(hero.skills)
        }
    })
}

function renderSkills(skills){
    eles.game.skillsView.innerHTML = "";
    skills.forEach(skill=>{
        let img = document.createElement("img");
        img.src = skill.ico;
        eles.game.skillsView.appendChild(img);
    })
}
// 作业 ：扩展鲁班类； 拥有三个技能 并且渲染到视图上；
