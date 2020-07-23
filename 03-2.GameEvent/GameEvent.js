export default class GameEvnet {
    constructor() {
        // this.handleID = 0; 
        this.handle = {};
        this.handleArgs = {};
    }
    // 添加事件
    addEvent(eventName, fn, args={}) {
        if (typeof this.handle[eventName] === 'undefined') {
            console.log('初始化新自定义事件:',eventName);
            this.handle[eventName] = [];
            this.handleArgs[eventName+'.'+fn.name] = [];
        }
        this.handle[eventName].push(fn);
        console.log(`${eventName}事件中的函数:`,this.handle[eventName]);
        let argList = this.handleArgs[eventName+'.'+fn.name];
        if(argList.every(listItem=>args!=listItem)){argList.push(args);}
        console.log(`${eventName}事件中${fn.name}函数的参数:`,argList);
    }
    // 触发事件
    trigger(eventName) {
        if (typeof this.handle[eventName] === "undefined") {
            console.log('未自定义${eventName}事件');
            return;
        }
        this.handle[eventName].forEach(fn => {
            this.handleArgs[eventName+'.'+fn.name].forEach(arg =>{
                fn(arg);
            });
        });
    }
    // 移除自定义事件
    removeEvent(eventName,fn){
        return;
    }
}

// let newmyevent = new GameEvnet();
// newmyevent.addEvent("myevnet",fn1);
// newmyevent.addEvent("myevnet",fn2);
// newmyevent.removeEvent("myevnet",fn1);
// newmyevent.trigger("myevnet")