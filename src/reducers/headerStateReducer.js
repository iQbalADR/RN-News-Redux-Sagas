const initialState = {
    data: [],
    isFetching: false,
}

const headerStateReducer = (currentState = initialState, action) => {
    switch(action.type) {
        case 'GET_NEWS_HEADER_LIST': 
        return {
            ...currentState,
            isFetching: true,
        }
        case 'GET_NEWS_HEADER_SUCCESS': 
        return {
            ...currentState,
            isFetching: false,
            data: action.response.sources,
        }
        default : return currentState;
    }
};

export default headerStateReducer;