import uuid from 'uuid';

const pageDefaultState = [{
    id: uuid(),
    title: 'Home',
    linkNav: true
}];

const pagesReducer = (state = pageDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAGE':
            return [
                ...state,
                action.pages
            ];
        default:
            return state;
    }
};

export default pagesReducer;