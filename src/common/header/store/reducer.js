import * as constants from './actionTypes'
import { fromJS } from 'immutable' // 将js对象转化为immutable对象
// facebook开发 immutable.js immutable对象

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
})
// 手动的保证state不被修改存在风险，引入immutable，生成immutable对象，不可变，state.set对数据进行变更，实际是返回了全新的state
// 把不同的了类型进行分类
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
          return state.set('focused', true)
        case constants.SEARCH_BLUR:
          return state.set('focused', false)
        case constants.CHANGE_LIST:
          return state.merge({
            'list': action.data,
            'totalPage': action.totalPage
          })
        case constants.MOUSE_ENTER:
          return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
          return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
          return state.set('page', action.page)
        default:
            return state
    }
}