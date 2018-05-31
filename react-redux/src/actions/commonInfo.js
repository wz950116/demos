import { ADDRESS_INFO } from '../actionType'

export function updateAddressInfo(data) {
	return {
		type: ADDRESS_INFO,
		data
	}
}