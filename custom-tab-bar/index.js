Component({
    data: {
      active: 0,
      list: [
        {
          icon: "todo-list-o",
          text: "订单",
          url: "/pages/management/order/order",
        },
        {
          icon: "star-o",
          text: "评价",
          url: "/pages/management/evaluation/evaluation",
        },
        {
          icon: "shop-o",
          text: "商品",
          url: "/pages/management/goods/goods",
        },
        {
          icon: "user-circle-o",
          text: "我的",
          url: "/pages/management/mine/mine",
        },
      ],
    },
  
    methods: {
      onChange(event) {
        // console.log(this.data.active);
        this.setData({ active: event.detail });
        wx.switchTab({
          url: this.data.list[event.detail].url,
        });
      },
  
      init() {
        const page = getCurrentPages().pop();
        this.setData({
          active: this.data.list.findIndex(
            (item) => item.url === `/${page.route}`
          ),
        });
      },
    },
  });
  