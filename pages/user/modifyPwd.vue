<template>
  <view class="content">
    <image
      class="logo"
      @click="imgtext = '../../static/login.jpg'"
      :src="imgtext"
    ></image>
    <view class="title">修改密码</view>
    <view class="login-form">
      <u--form
        labelPosition="left"
        :model="modifyForm"
        :rules="rules"
        ref="modifyForm"
      >
        <u-form-item label=" " prop="oldPwd" borderBottom>
          <u--input
            type="password"
            v-model="modifyForm.oldPwd"
            placeholder="请输入旧密码"
            border="none"
          ></u--input>
        </u-form-item>
        <u-form-item label=" " prop="newPwd" borderBottom>
          <u--input
            type="password"
            v-model="modifyForm.newPwd"
            placeholder="请输入新密码"
            border="none"
          ></u--input>
        </u-form-item>
        <u-form-item label=" " prop="newPwd1" borderBottom>
          <u--input
            type="password"
            v-model="modifyForm.newPwd1"
            placeholder="请再次输入新密码"
            border="none"
          ></u--input>
        </u-form-item>
      </u--form>
      <view class="login-botton">
        <u-button @click="modify" :disabled="!loginBtnLoading" type="primary">
          <view v-if="loginBtnLoading">修改</view>
          <u-loading-icon
            color="white"
            textColor="white"
            v-else
            text="修改中"
            textSize="15"
          ></u-loading-icon>
        </u-button>
      </view>
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
let app = getApp();
export default {
  data() {
    return {
      agreementShow: false,
      imgtext:
        "https://shcar010.oss-cn-beijing.aliyuncs.com/20220706/1657091015003316.jpg?Expires=1972451015&OSSAccessKeyId=LTAI5t9Qw5QggN9fNWRa7Uj7&Signature=96YrjEvEqmcxFkPQK7qj2eHGDpY%3D",
      // 验证码图片base64
      imgBase64: "",
      loginBtnLoading: true,
      // 登录的表单数据
      modifyForm: {
        oldPwd: "",
        newPwd: "",
        newPwd1: "",
      },
      rules: {
        oldPwd: {
          type: "string",
          required: true,
          message: "请输入旧密码",
          trigger: ["blur"],
        },
        newPwd: {
          type: "string",
          required: true,
          message: "请输入新密码",
          trigger: ["blur"],
        },
        newPwd1: {
          type: "string",
          required: true,
          message: "请再次输入新密码",
          trigger: ["blur"],
        },
      },
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
  methods: {
    // 登录函数
    async modify() {
      try {
        const vali = await this.$refs.modifyForm.validate();
        if (vali) {
          console.log(this.modifyForm.newPwd ,this.modifyForm.newPwd1)
          if (this.modifyForm.newPwd !== this.modifyForm.newPwd1) {
            this.$refs.uToast.show({
              type: "error",
              message: "新密码不一致",
            });
            return;
          }
          // 开启登录按钮登陆中加载状态和按钮禁用
          this.loginBtnLoading = false;
          let ajaxData = {
            oldPwd: this.modifyForm.oldPwd,
            newPwd: this.modifyForm.newPwd,
          };
          const res = await this.$API.post(
            "/user/changePwd",
            ajaxData,
            app.globalData.formdata
          );
          if (res.data.code == 200) {
            // 关闭登录按钮登陆中加载状态和按钮禁用
            this.$refs.uToast.show({
              type: "success",
              message: "修改成功,请重新登录",
            });
            this.loginBtnLoading = true;
            this.$API.setStorage("token", "");
            uni.redirectTo({
              url: "/pages/login/login",
            });
          } else {
            this.$refs.uToast.show({
              type: "error",
              message: res.data.message,
            });
            // 关闭登录按钮登陆中加载状态和按钮禁用
            this.loginBtnLoading = true;
          }
        }
      } catch (err) {
        console.log("登录函数错误", err);
        this.$refs.uToast.show({
          type: "error",
          message: err?.[0]?.message || "密码错误",
        });
        // 获取验证码
        this.checkCode();
        this.loginBtnLoading = true;
      }
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  padding-bottom: 40rpx;
  box-sizing: border-box;
}

.logo {
  height: 400rpx;
  width: 100%;
  margin-bottom: 50rpx;
}

.title {
  width: 100%;
  padding-left: 80rpx;
  margin-bottom: 40rpx;
  font-size: 50rpx;
  color: black;
  font-weight: 900;
}

.login-form {
  width: 100%;
  box-sizing: border-box;
  padding: 0rpx 100rpx;
}

.login-botton {
  width: 50%;
  margin: 80rpx auto 0rpx auto;
}

.codeimage {
  width: 180rpx;
  height: 70rpx;
}
</style>
