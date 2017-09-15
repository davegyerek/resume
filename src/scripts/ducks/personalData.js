const RECEIVE_ADDRESS = 'resume/page/RECEIVE-ADDRESS';
const REQUEST_ADDRESS = 'resume/page/REQUEST_ADDRESS';

import moment from 'moment';
import data from '../dataSource';

export default function (state = {
    address: "api.getLocation(AIzaSyA2QVmgNm76WWnklJlgmAZFV624Kxj3Ro0)",
    age: `moment().diff('${data.personal.birth}', 'years')`,
    email: `window.open('mailto:${data.personal.email}');`,
    phone: "/((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g",
    isCode: true,
    isLoading: false
}, action) {
    switch (action.type) {
        case RECEIVE_ADDRESS:
            return {
                address: action.address,
                age: moment().diff(data.personal.birth, 'years'),
                email: data.personal.email,
                phone: data.personal.phone,
                isCode: false,
                isLoading: false
            };
        case REQUEST_ADDRESS:
            return {...state, isLoading: true};
        default:
            return state;
    }
}


export function requestAddress() {
    return {type: REQUEST_ADDRESS};
}

export function receiveAddress(address) {
    return {type: RECEIVE_ADDRESS, address};
}