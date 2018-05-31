import { get } from './get';

// 地址列表
export function getAddressListData() {
	const result = get('/api/addresslist');
	return result;
}