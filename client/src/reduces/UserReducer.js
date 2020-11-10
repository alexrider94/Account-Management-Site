export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_INFO:
            return {
                ...state,
                info: payload,
            };
        default:
            return state;
    }
}