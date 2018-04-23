import uuid from 'uuid';

export const addPage = (pages) => ({
    type: 'ADD_PAGE',
    pages
});

export const startAddPage = (pagesData = {}) => {  // only works because of redux-thunk
    return (dispatch) => {
        const {
            title = 'No title given :(',
            linkNav = true
        } = pagesData;
        const page = { title, linkNav };
        dispatch(addPage({
            id: uuid(),
            ...page
        }));
    };
};