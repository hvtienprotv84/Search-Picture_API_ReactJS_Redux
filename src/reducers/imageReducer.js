export default (state = [], action) => {
    switch (action.type) {
        case 'NEW_IMAGES':
            return action.payload;
        case 'ADD_IMAGES':
            return [...state, ...action.payload];
        default:
            return state;
    }
};