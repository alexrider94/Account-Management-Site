export const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log(action);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.data.result));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export const userInitialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

