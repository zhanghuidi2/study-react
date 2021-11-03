// ! useState和setState的区别

// 一个在函数组件里更改状态，此方法是state的替换
// const [count, setCount] = useState(0)
// setCount(count + 1)


// 一个在类组件里面更改状态，此方法是state的合并
// this.state = {
//   count: 0
// }
// add = () => {
//   this.setState({
//     count: this.state.count + 1
//   })
// }

// ！更新组件的方法

// 类组件里 this.forceUpdate()
// 函数组建里 const [, forceUpdate] = useReducer(x => x + 1, 0) forceUpdate()
// 此方法是保证每次运行forceUpdate，state的值会一直累加永远和上一次的不相等,useReducer会记住上次的state并且再执行action

// 或者 const [, forceUpdate] = useState({}) this.forceUpdate({})
// {} === {}
// false

// 或者自定义hook
// function useForceUpdate() {
//   const [state, setState] = useState(0)
//   const update = useCallback(
//     () => {
//       setState(prev => prev + 1)
//     },
//     [],
//   )
//   return update;
// }

// redux 是一个纯js写的，需要用户自己去订阅合取消订阅
// react-redux是依赖context合redux完成的，内部自己去执行 了订阅


// 路由

// 优先级 children >>> component >>>> render

// children在普通路由中，不管是否路由匹配都会展示，但是在独占路由中是只和路由匹配
// component不能写成匿名函数的形式，否则操作state会不断的卸载挂在
// 404页面只能放到switch里面的 最下边，没写path默认是匹配的


