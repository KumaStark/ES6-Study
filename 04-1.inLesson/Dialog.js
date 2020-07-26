export default class Dialog {
  constructor(options) {
    // 默认配置
    let defaultOption = {
      width: "30%",
      height: "250px",
      title: "测试标题",
      content: "测试内容",
      dragable: true, //是否可拖拽
      maskable: true, //是否有遮罩
      isCancel: false, //是否有取消
    };
    // 合并配置
    let opts = Object.assign(defaultOption, options);
    // console.log(opts);
    this.init();
  }
  init() {
    this.createElement();
  }
  createElement() {
    let divEles = document.createElement("div");
    divEles.innerHTML = ``;
  }
  open() {
    console.log("open");
  }
}
