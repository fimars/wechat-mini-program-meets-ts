import { Component, View } from "@/lib/class-component/page";

interface Data {
  msg: string;
  title?: string;
}

@Component
export default class Index extends View<Data> {
  data = {
    msg: "hello",
  };
  onLoad() {
    this.testMethods();
  }
  testMethods() {
    console.log(this);
    wx.showModal({
      title: "H....",
      content: this.data.msg,
    });
  }
}
