import ES6Promise from 'es6-promise';

export const addressInfoInit = () => {
	return new ES6Promise((reslove, reject) => {
		if (1 === 1) {
			reslove("成功了");
		} else {
			reject("失败了");
		};
	});
}