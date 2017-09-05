const SCROLL_TOP = 'resume/scrollTop/SCROLL-TOP';

export function initialize(dispatch) {
    window.addEventListener('scroll', function (e) {
        dispatch(scroll(e.srcElement.body.scrollTop));
    });
}

export default function (state = 0, action) {
    switch (action.type) {
        case SCROLL_TOP:
            return action.value;
        default:
            return state;
    }
}

export function scroll(value) {
    return {type: SCROLL_TOP, value};
}

