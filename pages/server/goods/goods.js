let distance = 0;
Page({
  data: {
    activeIndex: 0,
    heightArr: [],
    toView: "content0",
    imageURL: "",
    scrollHeight: 500,
  },
  onLoad() {
    let query = wx.createSelectorQuery(),
      self = this;
    query
      .selectAll(".content-item")
      .boundingClientRect((rect) => {
        rect.forEach((ele) => {
          self.calculateHeight(ele.height);
        });
      })
      .exec();
  },
  onReady() {
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let scrollHeight = windowHeight - 90;
    this.setData({ scrollHeight: scrollHeight });
  },
  onShow() {
    this.getTabBar().init();
  },
  onChange(e) {
    this.setData({
      activeIndex: e.detail,
      toView: "content" + e.detail,
    });
  },
  //FIXME: 右侧滚动区域回到最顶端时，左侧标签无法回到初始状态
  scroll(e) {
    if (this.data.heightArr.length == 0) {
      return;
    }
    let scrollTop = e.detail.scrollTop;
    let current = this.data.activeIndex;
    if (scrollTop >= this.distance) {
      if (
        current + 1 < this.data.heightArr.length &&
        scrollTop >= this.data.heightArr[current]
      ) {
        this.setData({
          activeIndex: current + 1,
        });
        console.log(scrollTop);
      } else {
        if (current - 1 >= 0 && scrollTop < this.data.heightArr[current - 1]) {
          this.setData({
            activeIndex: current - 1,
          });
          console.log(scrollTop);
        }
      }
    }
    this.distance = scrollTop;
  },
  calculateHeight(height) {
    if (!this.data.heightArr.length) {
      this.data.heightArr.push(height);
    } else {
      this.data.heightArr.forEach((ele) => {
        height += ele;
      });
      this.data.heightArr.push(height);
    }
  },
  changeTabs() {},
});
