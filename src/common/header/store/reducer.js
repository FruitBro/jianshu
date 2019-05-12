import * as constants from './actionTypes'
import { fromJS } from 'immutable' // 将js对象转化为immutable对象
// facebook开发 immutable.js immutable对象

const defaultState = fromJS({
    focused: false
})
// 手动的保证state不被修改存在风险，引入immutable，生成immutable对象，不可变，state.set对数据进行变更，实际是返回了全新的state
// 把不同的了类型进行分类
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}