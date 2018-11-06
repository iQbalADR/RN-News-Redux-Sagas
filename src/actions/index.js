export const getNewsHeaders = () => {
    return {
        type : 'GET_NEWS_HEADER_LIST'
    }
}


export const getNewsDetails = (id) => {
    return {
        type : 'GET_NEWS_DETAIL_LIST',
        id
    }
}
