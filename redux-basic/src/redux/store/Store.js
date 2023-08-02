import updateReducer from "../Reducer/Reducer";
import {createStore} from 'redux'

const store = createStore(updateReducer)
store.subscribe(()=>console.log(store.getState()))


export default store