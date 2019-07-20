import { combineReducers } from 'redux-immutable'
import { headerReducer } from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store/'
// redux-immutable
// store中有什么数据是由reducer决定的，我们把reducer拆到了各个组件中
export default combineReducers({
    header: headerReducer,
    home: homeReducer
})
