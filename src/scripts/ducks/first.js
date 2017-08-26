const PAGE = 'snwich-order/page/PAGE';

export default function reducer(state = 1, action) {
    switch (action.type) {
        case PAGE:
            return action.page;
        default:
            return state;
    }
}


let current = 1;

export function changePage(page) {
    if (page >= 1 && page <= 3)
        current = page;
    return {
        type: PAGE,
        page: current
    };
}

export function prevPage() {
    return changePage(current - 1);
}

export function nextPage() {
    return changePage(current + 1);
}