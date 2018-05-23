module.exports = {
	title: 'my-blog', // 设置网站标题
	dest: './dist', // 设置输出目录
	base: '/', // 设置站点根路径
	themeConfig: {
		nav: [{
			text: 'index',
			link: '/'
		}, {
			text: 'vue',
			link: '/vue/'
		}, {
			text: 'js',
			link: '/js/'
		}, {
			text: 'css',
			link: '/css/'
		}, {
			text: 'github',
			// 这里是下拉列表展现形式。
			items: [{

				text: 'focus-outside',
				link: 'https://github.com/TaoXuSheng/focus-outside'
			}, {
				text: 'stylus-converter',
				link: 'https://github.com/TaoXuSheng/stylus-converter'
			}, ]
		}],
		// 为以下路由添加侧边栏
		sidebar: {
			'/css/': [
				'css1',
				'css2'
			],
			'/js/': [
				'js1',
				'js2'
			],
			'/vue/': [
				'vue-router',
				'vuex'
			],
		}
	}
}