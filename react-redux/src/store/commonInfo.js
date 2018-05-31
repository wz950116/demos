import { ADDRESS_INFO } from '../actionType';

const initialState = {
    cityName: {
        country: '中国',
        province: '北京',
        city: '北京'
    },
    userName: '',
    gender: '',
    tel: '',
    addressDetail: '',
    expireTime: ''
};

export default function commonInfo (state = initialState, action) {
    switch (action.type) {
        case ADDRESS_INFO:
            return Object.assign(state, {
                data: action.data,
            });
        default:
            return state;
    };
};