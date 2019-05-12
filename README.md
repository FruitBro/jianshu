安装 yarn add styled-components
reset.css https://meyerweb.com/eric/tools/css/reset/

Ajax获取推荐数据
关键点：1.将异步获取数据逻辑都拆分到了actionCreators中，返回的是函数（必须使用redux-thunk）
2.想要改变store中的数据时，reducer中的list外层包含了fromJS,因此list变为了immutable类型数组
想要改变数组，因此传递进来的数据也需要先转换为immutable
3.循环展示数据