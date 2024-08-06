const initial = {
    query: '',
    page: 1,
    per_page: 30
}

export default (state = initial, action) => {
    switch (action.type) {
        case 'NEW_QUERY':
            return { ...initial, query: action.payload };
        case 'ADD_PAGE':
            return { ...state, page: state.page + 1 };
        default:
            return state;
    }
};