console.log("我是a模块");
let obj = {
    name:"张安",
    age:20,
    fn(){
        console.log("fn");
    }
}
// 导出多个；
export let a = 10;
export let b = 20;
// 默认导出 一个；
export default obj;
// export {obj as default};