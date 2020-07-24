import MyEvent from './GameEvent.js';

let myEvent = new MyEvent;

let fn1 = function (args) { console.log(`fn1 args:`, args.a1); }
let fn2 = function (args) { console.log(`fn2 args:`, args.a1, args.a2); }
let fn3 = function (args) { console.log(`fn3 args:`, args.a1, args.a2, args.a3); }
let fn4;

console.log('### 开始添加自定义事件函数 ###');
myEvent.addEvent('myevent', fn1); // **作业要求内容**
myEvent.addEvent('myevent', fn1, { a1: 'fn1a1-1' });
myEvent.addEvent('myevent', fn1, { a1: 'fn1a1-2' });
myEvent.addEvent('myevent', fn1, { a1: 'fn1a1-3' });
myEvent.addEvent('myevent', fn2, { a1: 'fn2a1-1', a2: 'fn2a2-1' });
myEvent.addEvent('myevent', fn2, { a1: 'fn2a1-1', a2: 'fn2a2-1' }); // 测试增加重复项
myEvent.addEvent('myevent', fn2);
myEvent.addEvent('myevent', fn3, { a1: 'fn3a1-1', a2: 'fn3a2-1', a3: 'fn3a3-1' });
myEvent.addEvent('myevent', fn3, { a1: 'fn3a1-2', a2: 'fn3a2-2', a3: 'fn3a3-2' });
myEvent.addEvent('myevent', fn3, { a1: 'fn3a1-3', a2: 'fn3a2-3', a3: 'fn3a3-3' });
myEvent.addEvent('myevent', fn4);

console.log('### 验证添加结果 ###');
myEvent.showEventStatus('myevent'); // 验证作业要求
myEvent.trigger('myevent'); // 验证作业要求

console.log('### 开始删除自定义事件函数 ###');
myEvent.removeEvent('myevent', fn1); // **作业要求内容**
myEvent.removeEvent('myevent', fn2, false);
myEvent.removeEvent('myevent', fn3, false);
myEvent.removeEvent('myevent', fn3, false, { a1: 'fn3a1-3', a2: 'fn3a2-3', a3: 'fn3a3-3' });
myEvent.removeEvent('myevent', fn4);

console.log('### 验证删除结果 ###');
myEvent.showEventStatus('myevent'); // 验证作业要求
myEvent.trigger('myevent'); // 验证作业要求