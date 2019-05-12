import * as constants from './actionTypes'

const defaultState = {
    focused: false
}

// 把不同的了类型进行分类
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}