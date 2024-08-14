<template>
	<view class="submitpage">
		<u--text bold block margin="40rpx auto" align="center" size="40rpx" text="延保订单提交审核"></u--text>
		<view class="center-img">
			<image class="imgstyle" src="../../static/SL.jpg" mode=""></image>
		</view>
		<view class="text-box">
			<u--text bold block margin="80rpx auto 40rpx" align="left" size="30rpx" :text="'合同编号:' + ' ' + (optionData && optionData.contractNo)"></u--text>
			<u--text bold block margin="40rpx auto 80rpx" align="left" size="30rpx" :text="'提交时间:' + ' ' + timeString(optionData && optionData.createTime)"></u--text>
			<u--text bold block margin="80rpx auto 40rpx" color="red" align="left" size="30rpx" text="延保订单审核失败"></u--text>
			<u--text bold block margin="40rpx auto 100rpx" align="left" size="30rpx" text="请等待审核人员对信息进行审核"></u--text>
		</view>
		<view class="button-box">
			<u-button type="primary" @click="tolistpage" text="返回修改"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				optionData: {},
			}
		},
		onLoad(option) {
			console.log(JSON.parse(decodeURIComponent(option.option)), 'KKKKKKKKKKKKKKKKKKK')
			this.optionData = JSON.parse(decodeURIComponent(option.option))
		},
		methods: {
			// 时间格式化
			timeString(time) {
		      let datetime = new Date(time);
		      let year = datetime.getFullYear();
		      let month = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		      let date = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
		      let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
		      let minute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
		      let second = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
		      return year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minute + ':' + second;
		    },
			// 跳转函数
			tolistpage() {
				// 跳转至新建延保页面
				uni.redirectTo({
					url: `/pages/createInsurance/createInsurance?option=${encodeURIComponent(JSON.stringify(this.optionData))}`
				})
			}
		}
	}
</script>

<style scoped>
	.submitpage {
		width: 100%;
		box-sizing: border-box;
		padding:  40rpx 40rpx 220rpx 40rpx;
	}
	.center-img {
		width: 300rpx;
		height: 300rpx;
		background-color: red;
		border-radius: 150rpx;
		margin: 20rpx auto 40rpx;
		overflow: hidden;
	}
	.imgstyle {
		width: 100%;
		height: 100%;
	}
	.text-box {
		padding: 0rpx 84rpx;
	}
	.button-box {
		width: 200rpx;
		margin: 0 auto;
	}
</style>
