const READ_MORE = 'resume/readMore/READ-MORE';

export default function (state = false, action) {
    switch (action.type) {
        case READ_MORE:
            return true;
        default:
            return state;
    }
}
export function startReadMore() {
    return {type: READ_MORE};
}

