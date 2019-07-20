import { fromJS } from 'immutable' // 将js对象转化为immutable对象
// facebook开发 immutable.js immutable对象

const defaultState = fromJS({
    topicList: [{
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 3,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 4,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 5,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 6,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 7,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 8,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
      id: 9,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }]
})
// 手动的保证state不被修改存在风险，引入immutable，生成immutable对象，不可变，state.set对数据进行变更，实际是返回了全新的state
// 把不同的了类型进行分类
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}