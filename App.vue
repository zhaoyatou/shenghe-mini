<script>
	export default {
		globalData: {
			// 用户手写签名
			userHeadsName: '',
			// json请求头
			json: 'application/json;charset=UTF-8',
			// fromdata请求头
			formdata: 'application/x-www-form-urlencoded'
		},
		onLaunch: function() {
			
			
			
			
		},
		onShow: function() {
			
			
			
		},
		onLoad() {
			// 监听路由拦截器
			this.$API.routerIntercept(this)
			// 如果有token直接跳转到首页 没有放行到登录页
			if(this.$API.getStorage('token')) {
				uni.redirectTo({
					url: '/pages/home/home'
				})
			}else {
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
</style>
