const SCROLL_TOP = 'resume/scrollTop/SCROLL-TOP';

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

