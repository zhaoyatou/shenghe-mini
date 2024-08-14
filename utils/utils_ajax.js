let baseUrl = 'https://bjshqcyb.com/api'

// 获取token
let getStorage = (key) => {
	return uni.getStorageSync(key)
}
// 存储token
/**
 * 
 * @param {token} key 登录token 
 * @param {relosuser} key 用户权限 (10 为超管)
 * @param {SHrelos} key 审核权限 (1 为有权限审核)
 * @param {JBname} key 经办人
 * @param {*} key
 */
let setStorage = (key, val) => {
	uni.setStorageSync(key, val)
}
// get请求封装
let get = (url, data) => {	
	let promise = new Promise((resolve, reject, ContentType) => {
		uni.request({
			url: uni.getStorageSync('SYSTEMURL') + url,
			method: 'GET',
			data: data,
			header: {
				'Content-Type': ContentType,
				'token': uni.getStorageSync('token')
			},
			success: (res) => {
				console.log(uni.getStorageSync('SYSTEMURL'));
				if(res.statusCode == 200) {
					if(res.data.code == 413){
						setStorage('token', '')
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}else {
						resolve(res)
					}
				}else {
					reject(res)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
	return promise
}
// post请求封装
let post = (url, data, ContentType) => {	
	let promise = new Promise((resolve, reject) => {
		uni.request({
			url: uni.getStorageSync('SYSTEMURL') + url,
			method: 'POST',
			data: data,
			header: {
				// 'Content-Type': 'application/x-www-form-urlencoded',
				// 'Content-Type': 'application/json;charset=UTF-8',
				'Content-Type': ContentType,
				'token': uni.getStorageSync('token')
			},
			success: (res) => {
				console.log(uni.getStorageSync('SYSTEMURL'));
				if(res.statusCode == 200) {
					if(res.data.code == 413){
						setStorage('token', '')
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}else {
						resolve(res)
					}
				}else {
					reject(res)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
	return promise
}
// 路由拦截器
let routerIntercept = (that) => {
	let routerType = ['navigateTo', 'redirectTo', 'reLaunch', 'navigateBack', 'switchTab']
	routerType.forEach(item => {
		uni.addInterceptor(item, {
			invoke(args) {
				let token = getStorage('token')
				if(token) {
					if(args.url == '/pages/login/login') {
						return false
					}else {
						return true
					}
				}else {
					if(args.url != '/pages/login/login') {
						return false
					}else {
						return true
					}
				}
			}
		})
	})
	
}
// 每个页面onshow公共逻辑
let goLogin = () => {
	// 关闭左上角home键
	uni.hideHomeButton()
	// 如过不存在token就跳转至login页面
	if(!getStorage('token')) {
		uni.redirectTo({
			url: '/pages/login/login'
		})
	}
}
// 清空token和角色并返回登录页
let clearToken = () => {
	// 清除经办人
	setStorage('JBname', '')
	// 清除token
	setStorage('token', '')
	// 清除用户权限
	setStorage('relosuser', '')
	// 清除审核权限
	setStorage('SHrelos', '')
	uni.reLaunch({
		url: '/pages/login/login'
	})
}
let API = {
	getStorage,
	setStorage,
	get,
	post,
	routerIntercept,
	goLogin,
	clearToken,
	baseUrl,
}
export default API