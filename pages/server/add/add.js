Page({
  data: {
    name: "",
    price: 0,
    fees: 0,
    classify: "",
    food: "",
    curfId: 4,
    fruits: [
      { name: "苹果", id: 1 },
      { name: "西瓜", id: 2 },
      { name: "李子", id: 3 },
      { name: "梨", id: 4 },
    ],
    curfruitName: "梨",
    title: "水果",
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
  changeFruit: function (e) {
    console.log(e.detail.selectId);
    console.log(e.detail.select);
  },
});
