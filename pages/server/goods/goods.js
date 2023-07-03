Page({
  data: {
    activeKey: 0,
    imageURL: "",
    scrollHeight: 500,
  },
  onReady() {
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let scrollHeight = windowHeight - 90;
    this.setData({ scrollHeight: scrollHeight });
  },
  onShow() {
    this.getTabBar().init();
  },
  changeTabs() {},
});
