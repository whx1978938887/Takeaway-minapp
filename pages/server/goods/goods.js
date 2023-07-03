Page({
  data: {
    activeKey: 0,
    imageURL: "",
  },
  onShow() {
    this.getTabBar().init();
  },
  changeTabs() {},
});
