import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import complaintsReducer from '../reducers/complaints'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';
import auth from '../reducers/auth'

const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default()=>{
    const store=createStore(
        combineReducers({
       complaints:complaintsReducer,
       filters:filtersReducer,
       auth:auth
    
    }),
    composeEnchancers(applyMiddleware(thunk))
   
    );
    return store;
};

