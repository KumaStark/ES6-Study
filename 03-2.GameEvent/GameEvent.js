export default class MyEvent {
    constructor() {
        this.handle = {};
        this.handleArgs = {};
    }
    // 添加事件
    addEvent(eventName, fn, args = {}) {
        if ((typeof fn === 'undefined') || (typeof fn.name === 'undefined')) {
            console.log(`无法向自定义事件${eventName}中添加未定义或未命名的函数:`, eval(fn));
            return;
        }
        if (typeof this.handle[eventName] === 'undefined') {
            console.log('初始化新自定义事件:', eventName);
            this.handle[eventName] = [];
        }
        if (!this.handle[eventName].find(item => item === fn)) {
            console.log(`--- 将在${eventName}事件中增加函数:`, fn.name);
            this.handle[eventName].push(fn);
            this.handleArgs[eventName + '.' + fn.name] = [];
        } else {
            console.log(`--- 事件${eventName}中已有该函数，未新增:`, fn.name);
        }
        let argList = this.handleArgs[eventName + '.' + fn.name];
        if (argList.every(listItem => !this.isObjEqual(args, listItem))) {
            console.log(`~~~ 将为${fn.name}函数增加参数:`, args);
            argList.push(args);
        } else {
            console.log(`~~~ 函数${fn.name}已设置过该参数，未新增:`, args);
        }
    }
    // 触发事件
    trigger(eventName) {
        if (typeof this.handle[eventName] === "undefined") {
            console.log(`无法触发尚未自定义的${eventName}事件`);
            return;
        }
        console.log(`=== 已触发${eventName}事件 ===`);
        this.handle[eventName].forEach(fn => {
            this.handleArgs[eventName + '.' + fn.name].forEach(arg => {
                fn(arg);
            });
        });
    }
    // 移除自定义事件
    removeEvent(eventName, fn, removeAll = true, args = {}) {
        if (typeof this.handle[eventName] === "undefined") {
            console.log(`无法删除尚未自定义的${eventName}事件`);
            return;
        } else {
            let fnList = this.handle[eventName];
            if (fnList.find(item => item === fn)) {
                let argList = this.handleArgs[eventName + '.' + fn.name];
                if (removeAll) {
                    // 未设置removeAll开关时，默认删除对应函数所有的参数
                    argList = [];
                    console.log(`已从${eventName}事件中删除${fn.name}函数的所有参数`);
                } else {
                    // 设置removeAll为false时，删除对应函数的对应参数，未指定参数的用默认空对象去匹配
                    if (argList.find(item => this.isObjEqual(item, args))) { // 查找需要删除的参数对象
                        argList.splice(argList.findIndex(item => this.isObjEqual(item, args)), 1);
                        console.log(`已从${eventName}事件中删除${fn.name}函数的参数:`, args);
                    } else {
                        console.log(`无法删除${eventName}事件中${fn.name}函数未配置过的参数:`, args); // 未找到需要删除的参数对象
                    }
                }
                if (argList.length <= 0) {
                    // 如果一个函数的所有参数均被删除，则移除该函数
                    delete this.handleArgs[eventName + '.' + fn.name];
                    console.log(`${eventName}事件中${fn.name}函数的参数为0个`);
                    fnList.splice(fnList.findIndex(item => item === fn), 1);
                    console.log(`已从${eventName}事件中删除${fn.name}函数`);
                }
            } else {
                console.log(`无法删除${eventName}事件中未曾添加过的函数:`, eval(fn));
            }
        }
    }
    // 显示当前事件状态
    showEventStatus(eventName) {
        if (!(typeof this.handle[eventName] === "undefined")) {
            console.log(`>>> 当前${eventName}事件中包含下列函数:`, this.handle[eventName]);
            this.handle[eventName].forEach(fn => {
                let argList = this.handleArgs[eventName + '.' + fn.name];
                console.log(`--- ${fn.name}函数有下列参数:`, argList);
            })
        } else {
            console.log(`无法找到自定义的事件:`, eventName);
            return;
        }
    }
    // 判断两个对象包含的元素是否相同
    isObjEqual(obj1, obj2) {
        let obj1Names = Object.getOwnPropertyNames(obj1);
        let obj2Names = Object.getOwnPropertyNames(obj2);
        if (obj1Names.length != obj2Names.length) {
            return false;
        }
        for (let i = 0; i < obj1Names.length; i++) {
            let pName = obj1Names[i];
            if (obj1[pName] !== obj2[pName]) {
                return false;
            }
        }
        return true;
    }
}