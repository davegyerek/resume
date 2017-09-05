const EXPAND_TECH = 'resume/expand/EXPAND-TECH';
const EXPAND_ABOUT = 'resume/expand/EXPAND-ABOUT';
const CLOSE = 'resume/expand/CLOSE';

const defaultState = {
    techExpanded: false, // false
    aboutExpanded: false,
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case EXPAND_TECH:
            return {...defaultState, techExpanded: true};
        case EXPAND_ABOUT:
            return {...defaultState, aboutExpanded: true};
        case CLOSE:
            return {...defaultState};
        default:
            return state;
    }
}


export function close(){
    return {type: CLOSE}
}
export function expandTech(){
    return {type: EXPAND_TECH}
}
export function expandAbout(){
    return {type: EXPAND_ABOUT}
}