Page({
  data: {
    scrollHeight: 500,
    date: "",
    time: "",
    imageURL: ''
  },
  onReady() {
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let scrollHeight = windowHeight - 94;
    this.setData({ scrollHeight: scrollHeight });
  },
  onShow() {
    this.getTabBar().init();
  },
});
