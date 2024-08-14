<template>
    <view class='contents'>
        <canvas class='firstCanvas' canvas-id="firstCanvas" @touchmove='move' @touchstart='start($event)' @touchend='end'
         @touchcancel='cancel' @longtap='tap' disable-scroll='true' @error='error'>
        </canvas>
        <view class="caozuo">
            <view class="chongqian" @tap='clearClick'>
                重签
            </view>
            <view class="over" @tap="overSign">
                完成签名
            </view>
        </view>
    </view>
</template>

<script>
	let app = getApp()
    var content = null;
    var touchs = [];
    var canvasw = 0;
    var canvash = 0;
    var _that;
    export default {
        data() {
            return {
                signImage: '',
                isEnd: false // 是否签名
            }
        },
		onShow() {
			// 查看是否还存在token
			this.$API.goLogin()
			//获取系统信息
			uni.getSystemInfo({
				success: function(res) {
					canvasw = res.windowWidth;
					canvash = res.windowHeight;
				},
			})
		},
        methods: {
            overSign: function() {
				let that = this
                if (this.isEnd) {
                    uni.canvasToTempFilePath({
                        canvasId: 'firstCanvas',

                        success: function(res) {
                            //打印图片路径
							new Promise((resolve, reject) => {
								uni.uploadFile({
									url: uni.getStorageSync('SYSTEMURL') + '/oss/uploadFile',
									filePath: res.tempFilePath,
									name: 'file',
									header: {
										"token": uni.getStorageSync('token'),
									},
									success: (rea) => {
										resolve(JSON.parse(rea.data))
									}
								})
							}).then(rec => {
								app.globalData.userHeadsName = rec.data.fileUrl
								uni.navigateBack({
									delta: 1
								}) 
							})
                        }
                    })
                } else {
                    uni.showToast({
                        title: '请先完成签名',
                        icon: "none",
                        duration: 1500,
                        mask: true
                    })
                }

            },

            // 画布的触摸移动开始手势响应
            start: function(event) {
                // // console.log(event)
                // console.log("触摸开始" + event.changedTouches[0].x)
                // console.log("触摸开始" + event.changedTouches[0].y)
                //获取触摸开始的 x,y
                let point = {
                    x: event.changedTouches[0].x,
                    y: event.changedTouches[0].y
                }
                // console.log(point)
                touchs.push(point);

            },
            // 画布的触摸移动手势响应
            move: function(e) {
                let point = {
                    x: e.touches[0].x,
                    y: e.touches[0].y
                }
                // console.log(point)
                touchs.push(point)
                if (touchs.length >= 2) {
                    this.draw(touchs)
                }
            },

            // 画布的触摸移动结束手势响应
            end: function(e) {
                console.log("触摸结束" + e)
                // 设置为已经签名
                this.isEnd = true
                // 清空轨迹数组
                for (let i = 0; i < touchs.length; i++) {
                    touchs.pop()
                }

            },

            // 画布的触摸取消响应
            cancel: function(e) {
                console.log("触摸取消" + e)
            },

            // 画布的长按手势响应
            tap: function(e) {
                console.log("长按手势" + e)
            },

            error: function(e) {
                console.log("画布触摸错误" + e)
            },

            //绘制
            draw: function(touchs) {
                // console.log(touchs[0],touchs[1])
                let point1 = touchs[0]
                let point2 = touchs[1]
                touchs.shift()
                content.moveTo(point1.x, point1.y)
                content.lineTo(point2.x, point2.y)
                content.stroke()
                content.draw(true)
            },
            //清除操作
            clearClick: function() {
                // 设置为未签名
                this.isEnd = false
                //清除画布
                content.clearRect(0, 0, canvasw, canvash)
                content.draw(true)
            },
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
            _that = this
            //获得Canvas的上下文
            content = uni.createCanvasContext('firstCanvas')
            //设置线的颜色
            content.setStrokeStyle("#000")
            //设置线的宽度
            content.setLineWidth(5)
            //设置线两端端点样式更加圆润
            content.setLineCap('round')
            //设置两条线连接处更加圆润
            content.setLineJoin('round')
        },

    }
</script>

<style scoped>
    .ts {
        color: #FF485D;
        font-size: 30rpx;
        height: 150rpx;
        line-height: 150rpx;
        padding-left: 20rpx;
    }

    canvas {
        background-color: #DDDDDD;
        width: 700rpx;
        margin: 0 25rpx;
        height: calc(100vh - 90rpx);
		
    }

    .contents {
        padding-top: 20rpx;
        padding-bottom: 70rpx;
        box-sizing: border-box;
		
    }

    #signatureImg {
        background-color: #EEEEEE;
    }

    .caozuo {
        display: flex;
        height: 50rpx;
        width: 750rpx;
        position: fixed;
        left: 0;
        bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
    }

    .caozuo view {
        width: 375rpx;
        text-align: center;
        height: 50rpx;
        line-height: 50rpx;
        color: #FFFFFF;
    }

    .caozuo view:active {
        background-color: #CCCCCC;
        color: #333333;
    }

    .chongqian {
        background-color: #FF8F58;
    }

    .over {
        background-color: #0599D7;
    }
</style>