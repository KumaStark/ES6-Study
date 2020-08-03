# 简版 mvvm 框架实现

## 空调

## 课堂主题

- 1.利用 defineProperty 实现数据劫持;
- 2.利用 ES6 中 proxy 实现数据劫持
- 3.mvvm 框架中编译数据到视图
- 4.实现数据驱动视图更新；
- 5.发布订阅模式；
- 6.AMD 模块化 require.js 介绍；

## 知识点

- defineProperty；
- Proxy 代理
- 数据劫持
- es6 模块化、exports 和 import
- AMD /CMD 模块化；

### defineProperty

```js
Object.defineProperty(obj, "name", {
  get() {
    return value;
  },
  set(newValue) {
    console.log("set...");
    value = newValue;
  },
});
```

### proxy

- 定义 ：对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

- 基本使用

  ```js
  let obj = new Proxy(
    {
      name: "张三",
      age: 20,
    },
    {
      get(target, name) {
        return target[name];
      },
      set(target, name, value) {
        target[name] = value;
      },
    }
  );
  ```

- 相关配置参数

  ```
  has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
  defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  ```

## 通过数据劫持实现表达式

- 通过 defineProperty 劫持数据:observer

##发布订阅监听数据的更新

- 通过自定义事件触发更新
- 通过发布订阅模式触发更新

## 实现插值表达式

- 初次渲染更新视图
- 二次渲染更新视图

## 实现 v-model

- 输入框赋值
- 监听输入事件

###AMD require.js

- require.js 使用

  - 引入 require.js

    ```js
    https://cdn.bootcss.com/require.js/2.3.6/require.js
    ```

  - 1.加载模块

    ```js
    require(["a"]);
    ```

  - 2.定义模块

    - 无依赖定义

    ```js
    define({
      method1: function () {
        console.log("a method...");
      },
      method2: function () {
        console.log("b method...");
      },
    });
    ```

    - 模块有依赖

      ```js
      define(["c"], {
        method1: function () {
          console.log("a method...");
        },
        method2: function () {
          console.log("b method...");
        },
      });
      ```

    - 函数式写法

      ```js
      define(["c"], function (c) {
        console.log(c);
        obj = {
          name: "张安",
          age: 20,
        };
        return obj;
      });
      ```

### 模块化优点

- 防止作用域污染
- 提高代码的复用性
- 维护成本降低

## 总结

- defineProperty；
- Proxy 代理
- 数据劫持
- AMD /CMD 模块化；

## 下节预告

- git
