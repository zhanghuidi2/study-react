import React, { Component } from 'react';
import { Context, UserContext } from '../Context';
import ConsumerPage from './ConsumerPage';
import ContextTypePage from './ContextTypePage';
import UseContextPage from './UseContextPage';
class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: '章三'
      }
    }
  }
  changeColor = () => {
    this.setState({
      theme: {
        themeColor: 'blue'
      }
    })
  }
  render() {
    const { theme, user } = this.state
    return (
      <div>
        <button onClick={ this.changeColor}>button</button>
        <Context.Provider value={theme}>
        <div>Context</div>
        <UserContext.Provider value={user}>
          <ContextTypePage />
          <UseContextPage />
          <ConsumerPage />
        </UserContext.Provider>
        
      </Context.Provider>
      </div>
      
    );
  }
}
 
export default ContextPage;

// * 如何使用context
// step1: 创建一个context对象
// step2: 创建provider, 传递value
// step3: 子组建消费value, 有三种途径 contextType，useContext， consumer

// * 区别
// contextType 只能用在类组件里,只能消费单一的context的来源
// useContext 只能用在函数组件里,可以消费多个context的来源
// consumer任何组件，多个来源, 写法繁琐


// value修改，所有的组件都会更新