import actionsTypes from './actions.js';

export const initialState = {
    authUser: "Jan Kowalski",
    currentLink: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.LOGIN_ACTION:
            return {
                ...state,
                authUser: action.authUser
            }
        case actionsTypes.CURRENT_LINK_ACTION:
            return {
                ...state,
                currentLink: action.currentLink
            }
        default:
            return state;
    }
}

export default reducer;
