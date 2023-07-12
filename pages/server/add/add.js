Page({
  data: {
    name: "",
    price: 0,
    fees: 0,
    food: "",
    classify: "请选择",
    activeNames: ["1"],
  },
  onLoad: function (options) {
    //Do some initialize when page load.
  },
  onReady: function () {
    //Do some when page ready.
  },
  onShow: function () {
    //Do some when page show.
  },
  onHide: function () {
    //Do some when page hide.
  },
  onUnload: function () {
    //Do some when page unload.
  },
  onPullDownRefresh: function () {
    //Do some when page pull down.
  },
  onChangeTap: function (event) {
    console.log(event.detail);
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
});
