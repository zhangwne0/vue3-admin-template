import dashboard from './modules/dashboard'
import log from './modules/log'

/**
 * 在主框架内显示
 */

const frameIn = [
	{
		path: '/',
		redirect: {
			name: 'dashboard'
		}
	},
	dashboard,
	log
]

/**
 * 在主框架之外显示
 */

const frameOut = [
	// 登录
]

/**
 * 错误页面
 */

const errorPage = [
	{
		path: '/403',
		name: '403',
		meta: {
			title: '403'
		},
		component: () => import('@/pages/system/error/403')
	},
	{
		path: '/500',
		name: '500',
		meta: {
			title: '500'
		},
		component: () => import('@/pages/system/error/500')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		meta: {
			title: '404'
		},
		component: () => import('@/pages/system/error/404')
	}
]

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage]
