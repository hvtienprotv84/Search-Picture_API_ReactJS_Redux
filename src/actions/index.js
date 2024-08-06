import unsplash from '../api/unsplash';

export const newImages = () => async (dispatch, getState) => {
    const response = await unsplash.get('/search/photos', {
        params: getState().params
    }); 
    dispatch ({
        type: 'NEW_IMAGES',
        payload: response.data.results 
    });
}

export const addImages = () => async (dispatch, getState) => {
    const response = await unsplash.get('/search/photos', {
        params: getState().params
    }); 
    dispatch ({
        type: 'ADD_IMAGES',
        payload: response.data.results 
    });
}

export const newQuery = (term) => async dispatch => {
    dispatch ({
        type: 'NEW_QUERY',
        payload: term
    });
}

export const addPage = () => async dispatch => {
    dispatch ({
        type: 'ADD_PAGE'
    });
}