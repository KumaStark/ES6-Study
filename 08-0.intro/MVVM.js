class KVue {
    constructor(options) {
        this.$options = options;
        this.$data = options.data;
        this.observer(this.$data);
        this.compile();
    }
    // 观察绑定
    observer(data) {
        Object.keys(data).forEach(key => {
            let value = data[key];
            let dep = new Dep;
            Object.defineProperty(data, key, {
                configurable: true,
                enumerable: true,
                get() {
                    // console.log(`${key}的值被观察了`);
                    if (Dep.currentWatcher) {
                        dep.addSub(Dep.currentWatcher);
                        console.log(`${key}有了新的watcher`);
                        Dep.currentWatcher = undefined;
                    }
                    return value
                },
                set(newValue) {
                    // console.log('Set');
                    dep.deliver(newValue);
                    value = newValue;
                }
            })
        })
    }
    // 渲染
    compile() {
        let eles = document.querySelector(this.$options.el);
        this.compileChildNode(eles.childNodes);
    }
    // 节点遍历
    compileChildNode(eles) {
        // 获取子节点
        let childNodes = eles;
        // console.log(childNodes);
        childNodes.forEach(node => {
            if (node.nodeType === 3) {
                // console.log('文本：',node);
                let textContent = node.textContent;
                // console.log(textContent);
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
                if (reg.test(textContent)) {
                    let $1 = RegExp.$1;
                    new Watcher((newMessage) => {
                        // 更新值时要注意不能把原有值全部删除，需要做匹配
                        console.log(`${$1}的watcher收到了新信息:`, newMessage);
                        // node.textContent = newMessage; // 注意：这里的写法不是很恰当，但是对于文本只有{{}}标记的情况，可以使用
                        let newReg = new RegExp(this.$data[$1]);
                        // 如果头尾都有值，例如【头】{{inputText1}}【尾】结构，正则表达式替换单个英文字符时容易出现Bug
                        node.textContent = node.textContent.replace(newReg, newMessage);
                    })
                    node.textContent = textContent.replace(reg, this.$data[$1]);
                    // console.log(textContent);
                }
            } else if (node.nodeType === 1) {
                // console.log('标签：',node);
                let nodeAttribs = node.attributes;
                [...nodeAttribs].forEach(attr => {
                    if (attr.name === 'v-model') {
                        // 文本框可以不需要添加Watcher，原本就具有编辑存储显示的功能
                        // new Watcher((newMessage)=>{
                        //     console.log(`${attr.value}的watcher收到了新信息:`,newMessage);
                        //     node.value = newMessage;
                        // })
                        node.value = this.$data[attr.value];
                        addEventListener('input', e => {
                            this.$data[attr.value] = e.target.value;
                        })
                    } else if (attr.name === 'v-html') {

                    }
                });
                if (node.childNodes) { this.compileChildNode(node.childNodes); }
            }
        });
    }
}

class Dep {
    constructor() {
        this.subList = [];
    }
    addSub(watcher) {
        this.subList.push(watcher);
    }
    deliver(newMessage) {
        this.subList.forEach(watcher => {
            watcher.receiver(newMessage);
        })
    }
}

class Watcher {
    constructor(receiver) {
        Dep.currentWatcher = this;
        // this.target = target;
        this.receiver = receiver;
    }
}