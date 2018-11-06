const initialState = {
    data: [],
    isFetching: false,
}

const detailStateReducer = (currentState = initialState, action) => {
    switch(action.type) {
        case 'GET_NEWS_DETAIL_LIST': 
        return {
            ...currentState,
            isFetching: true,
        }
        case 'GET_NEWS_DETAIL_SUCCESS': 
        return {
            ...currentState,
            isFetching: false,
            data: action.response.articles,
        }
        default : return currentState;
    }
};

export default detailStateReducer;