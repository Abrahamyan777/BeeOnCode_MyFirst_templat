// import { createStore } from "redux"
// import { rootReducer } from "./reduser/rootReducer"

// export const store = createStore({rootReducer})



import { createStore, combineReducers } from "redux";
import { CustomerReduser } from "./redusers/CustomerReduser";
import { CashReduser } from "./redusers/CashRedusers";


const rootReducers = combineReducers( {
    Cash : CashReduser,
    Customer: CustomerReduser
})


export const store = createStore(rootReducers);



