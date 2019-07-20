import React, { Component } from "react";
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
  render() {
    const { list } = this.props
    console.log(list)
    return (<TopicWrapper>
      {
        list.map(item => {
          return (
          <TopicItem key={item.get('id')}>
            <img
              className="topic-pic"
              src={item.get('imgUrl')} 
            />
            {item.get('title')} 

          </TopicItem>
          )
        })
      }
    </TopicWrapper>);
  }
}
// 写法要规范 函数带({})与{}的区别
const mapState = (state) => ({
  list: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic)
