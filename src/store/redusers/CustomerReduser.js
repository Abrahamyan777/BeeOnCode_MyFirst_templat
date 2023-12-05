const defaultState = {
        customers: [1,2,6]
    }


export const CustomerReduser = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_CUSTOMER":
            return {...state, cash: state.cash + action.paylod}
        case "GET_CUSTOMER" :
            return {...state, cash: state.cash - action.paylod}
        default:
            return state
    }
}