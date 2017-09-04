const RECEIVE_ADDRESS = 'resume/page/RECEIVE-ADDRESS';
const REQUEST_ADDRESS = 'resume/page/REQUEST_ADDRESS';

import moment from 'moment';

export default function (state = {
    address: "api.getLocation(AIzaSyA2QVmgNm76WWnklJlgmAZFV624Kxj3Ro0)",
    age: "moment().diff('1994-09-02', 'years')",
    email: "window.open('mailto:balinabbb@gmail.com');",
    phone: "/((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g",
    isCode: true
}, action) {
    switch (action.type) {
        case RECEIVE_ADDRESS:
            return {
                address: action.address,
                age: moment().diff('1994-09-02', 'years'),
                email: "balinabbb@gmail.com",
                phone: "+3620 491 93 24",
                isCode: false
            };
        case REQUEST_ADDRESS:
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