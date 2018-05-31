// polyfill
import 'whatwg-fetch';
import 'es6-promise';

const domain = 'http://127.0.0.1:3000';

// 在页面中动态插入 script标签
const loadScript = (url, func, clear = false) => {
	let script = document.createElement('script')
	let bodyEle = document.body
	script.src = url
	script.onload = script.onreadystatechange = function() {
		if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
			func && typeof func === 'function' && func()
			clear ? bodyEle.removeChild(script) : (script.onload = script.onreadystatechange = null)
		}
	}
	bodyEle.appendChild(script)
};
const selfJsonp = (url, callback, cb = 'cb') => {
	let cbname = cb + new Date().getTime()
	window[cbname] = (data) => {
		callback(data)
		delete window[cbname]
	}
	url += url.indexOf('?') === -1 ? '?' : '&'
	url += (cb + '=' + cbname)
	loadScript(url, null, true)
};

export function getByJsonp(url, cb = 'cb') {
	return new Promise((resolve, reject) => {
		selfJsonp(url, (data) => {
			resolve(data)
		}, cb)
	})
};

export function get(url) {
	let headers = new Headers({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'text/plain; application/json; charset=utf8'
	})
	let result = fetch(domain + url, {
		headers
	})

	return result
};