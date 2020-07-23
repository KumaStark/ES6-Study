export default class GameEvnet {
    constructor() {
        this.handleID = 0; 
        this.handle = {};
        this.handleArgs = {};
    }
    // 添加事件
    addEvent(eventName, fn, args) {
        if (typeof this.handle[eventName] === 'undefined') {
            this.handle[eventName] = [];
            this.handleArgs[fn.name + handleID] = [];
        }
        this.handle[eventName].push(fn);
        handleID ++;
    }
    // 触发事件
    trigger(eventName) {
        if (typeof this.handle[eventName] === undefined) {
            return;
        }
        this.handle[eventName].forEach(fn => {
            fn();
        })
    }
    // 移除自定义事件
    removeEvent(eventName,fn){

    }
}

// let newmyevent = new GameEvnet();
// newmyevent.addEvent("myevnet",fn1);
// newmyevent.addEvent("myevnet",fn2);
// newmyevent.removeEvent("myevnet",fn1);
// newmyevent.trigger("myevnet")