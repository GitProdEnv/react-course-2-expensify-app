const mainFillContainerReducerDefaultState = [];

const mainFillContainerReducer = (state = mainFillContainerReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MAIN_FILL':
            return [
                ...state,
                action.main_container
            ];
        default:
            return state;
    }
};

export default mainFillContainerReducer;