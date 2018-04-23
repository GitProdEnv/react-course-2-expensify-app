import uuid from 'uuid';

export const addMainFill = (main_container) => ({
    type: 'ADD_MAIN_FILL',
    main_container
});

export const startAddMainFill = (containerData = {}) => {  // only works because of redux-thunk
    return (dispatch) => {
        const {
            type = 'accordion',
            createdAt = 0
        } = containerData;
        const mainFill = { type, createdAt };
        dispatch(addMainFill({
            id: uuid(),
            ...mainFill
        }));
    };
};