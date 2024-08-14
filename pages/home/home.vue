<template>
  <view class="home">
    <view class="image-box">
      <image class="image-box" :src="imgtext" mode=""></image>
    </view>
    <view class="type-box">
      <view class="title">请选择业务类型</view>
      <view @click="business(1)" class="content-box">新建服务</view>
      <view @click="business(2)" class="content-box">服务列表</view>
      <view @click="business(3)" class="content-box" v-show="false"
        >理赔业务</view
      >
      <view class="extra-content">
        <button size="mini" class="extra-btn" @click="modiyPwd">
          修改密码
        </button>
        <button size="mini" class="extra-btn" @click="logout">帐号退出</button>
      </view>
    </view>
  </view>
</template>

<script>
let app = getApp();
export default {
  data() {
    return {
      imgtext:
        "https://shcar010.oss-cn-beijing.aliyuncs.com/20220706/1657091015003316.jpg?Expires=1972451015&OSSAccessKeyId=LTAI5t9Qw5QggN9fNWRa7Uj7&Signature=96YrjEvEqmcxFkPQK7qj2eHGDpY%3D",
    };
  },
  onLoad() {
    uni.getNetworkType({
      success: (res) => {
        if (
          res.networkType == "2g" ||
          res.networkType == "3g" ||
          res.networkType == "none"
        ) {
          this.imgtext = "../../static/login.jpg";
        }
      },
      fail: () => {},
    });
  },
  onShow() {
    // 关闭左上角home图标并确定还有没有token
    this.$API.goLogin();
    app.globalData.userHeadsName = "";
  },
  methods: {
    modiyPwd() {
      uni.redirectTo({
        url: "/pages/user/modifyPwd",
      });
    },
    logout() {
      this.$API.setStorage("token", "");
      uni.redirectTo({
        url: "/pages/login/login",
      });
    },
    // 选则业务的函数
    business(val) {
      // 1为新建延保业务 2为延保业务列表 3为理赔业务
      switch (val) {
        case 1:
          uni.navigateTo({
            url: "/pages/createInsurance/createInsurance",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "/pages/listpage/listpage",
          });
          break;
        default:
      }
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  padding-bottom: 40rpx;
  box-sizing: border-box;
}
.image-box {
  width: 100%;
  height: 400rpx;
}
.type-box {
  width: 100%;
  padding: 40rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40rpx;
}
.title {
  width: 600rpx;
  font-size: 35rpx;
  font-weight: 600;
  color: #000000;
  margin-bottom: 40rpx;
}
.content-box {
  width: 600rpx;
  height: 200rpx;
  background-color: #49bfe3;
  margin-top: 40rpx;
  border-radius: 10rpx;
  text-align: center;
  line-height: 200rpx;
  font-size: 40rpx;
  color: white;
}
.content-box:nth-last-child(1) {
  background-color: #e3a84a;
}
.extra-content {
  margin-top: 22px;
}
.extra-btn {
  float: left;
  margin: 12px;
  border-color: #49bfe3;
}
</style>
