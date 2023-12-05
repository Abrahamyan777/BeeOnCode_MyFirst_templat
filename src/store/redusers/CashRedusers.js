const defaultState = {
    cash1: 0,
    cash: 0,
}


export const CashReduser = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_CASH":
            return {...state, cash: state.cash + action.paylod}
        case "GET_CASH" :
            return {...state, cash: state.cash - action.paylod}
        default:
            return state
    }
}