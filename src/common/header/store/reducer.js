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

// console.log(b)
// var b = 1
// function b () {

// }
// console.log(b)


// /**
//  * 算法基本思路
//  * 边界值
//  * 返回值
//  * 
//  */
// // 查找一个字符串中的最大值
// var str = 'sfeifsfevdewijiegdes'
 
// function findMaxChar (str) {
//   if (str.length === 1) {
//     return str
//   }
//   var charObj = {}
//   for (let i = 0; i < str.length; i++) {
//     if (!charObj[str.charAt(i)]) {
//       charObj[str.charAt(i)] = 1
//     } else {
//       charObj[str.charAt(i)] ++
//     }
//   }
//   let maxChar = ''
//   let maxValue = 1
//   for (const k in charObj) {
//     if (charObj[k] >= maxValue) {
//       maxChar = k
//       maxValue = charObj[k]
//     }
//   }
//   return maxChar
// }

// // for in 与 for of 的区别

// var obj = {
//   a: 1,
//   b: 2,
//   c: 4,
//   d: 2
// }

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];
    
//   }
// }

// for (const iterator of object) {
  
// }

// // 判断一个单词是否是回文

// var paliStr = 'manam'

// function checkPalindrom (str) {
//   return str === str.split('').reverse().join('')
// }


