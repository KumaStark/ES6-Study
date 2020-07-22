export default class hero{
    constructor(name,icoIDs,skinIDs,skillIDs){
        this.name = name;
        this.icoIDs = icoIDs;
        this.skinIDs = skinIDs;
        this.skillIDs = skillIDs;
        this.ico = this.getIco();
        this.skin = this.getSkin();
        this.skills = this.getSkills();
    }
    getIco(ID=0,resSuffix='.png'){
        let icoLoc = "./sources/heros/";
        return icoLoc + this.icoIDs[ID] + resSuffix;
    }
    getSkills(resSuffix='.js'){
        let skillLoc = "./skills/s";
        let skills = [];
        this.skillIDs.forEach(async function(ID){
            await import(skillLoc+ID+resSuffix).then((pm)=>{skills.push(new pm.default)});
        })
        return skills;
    }
    getSkin(ID=0,resSuffix='.png'){
        let skinLoc = "./sources/skins/";
        return skinLoc + this.skinIDs[ID] + resSuffix;
    }
}