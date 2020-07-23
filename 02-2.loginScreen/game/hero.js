export default class Hero {
    constructor(name, icoIDs, skinIDs, skillIDs) {
        this.name = name;
        this.icoIDs = icoIDs;
        this.skinIDs = skinIDs;
        this.skillIDs = skillIDs;
        this.ico = this.getIco(0);
        this.skin = this.getSkin(0);
        this.skills = this.getSkills();
    }
    getIco(ID, resSuffix = '.png') {
        let icoLoc = "./sources/heros/";
        let returnIco = icoLoc + this.icoIDs[ID] + resSuffix;
        // console.log('set icon to:', this.ico);
        return returnIco;
    }
    getSkin(ID, resSuffix = '.png') {
        let skinLoc = "./sources/skins/";
        this.skin = skinLoc + this.skinIDs[ID] + resSuffix;
        // console.log('set skin to:', this.skin);
        return this.skin;
    }
    getSkills(resSuffix = '.js') {
        let skillLoc = "./skills/s";
        let skills = [];
        this.skillIDs.forEach(async function (ID) {
            await import(skillLoc + ID + resSuffix).then((pm) => {
                skills.push(new pm.default)
            });
        })
        return skills;
    }
}