//项目的根组件
import { useState } from "react"
import './index.css'
import { useRef } from "react"
const count = 10
function getName() {
  return 'jack'
}
const list = [{ id: '1001', name: 'Vue' }, { id: '1002', name: 'React' }, { id: '1003', name: 'Angular' }]
const isLogin = false
const articleType = 2//0 1 2
function getArticleItem() {
  if (articleType === 0) {
    return <div>无图文章</div>
  } else if (articleType == 1) {
    return <div>单图文章</div>
  } else {
    return <div>多图文章</div>
  }
}

//函数组件
function MButton() {
  return <button>click me!</button>
}
function App() {
  const handleClick = (e) => {
    alert('我被点击了')
    console.log(e);
  }
  const click = (name) => {
    console.log(name);
  }

  const click2 = (e, name) => {
    console.log(e, name);
  }
  //使用useState实现一个计数器按钮
  const [count2, setCount] = useState(0)
  const addCountClick = () => {
    setCount(count2 + 1)
  }
  //修改对象状态
  const [form, setForm] = useState({ name: 'jack' })
  const fixFormName = () => {
    setForm({
      ...form,
      name: 'pink'
    })
  }
  //受控组件
  const [value, setValue] = useState('')
  //获取DOM
  //1
  const inputRef = useRef(null)
  //2DOM生成之后才可用
  const showDom = () => {
    console.log(inputRef.current);
    console.log('点击button');
  }

  return (
    <div className="App">
      this is  app
      {/*使用引号传递字符串*/}
      {'this is message'}
      {/*识别js变量*/}
      {count}
      {/*函数调用*/}
      {getName()}
      {/*方法调用*/}
      {new Date().getDate()}
      {/*使用js对象*/}
      <div style={{ color: 'red' }}>this is div</div>
      {/*列表渲染 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/*条件渲染 */}
      {isLogin && <span>this is span?</span>}
      {isLogin ? <span>los</span> : <span>loading----</span>}
      {getArticleItem()}
      <button onClick={handleClick}>点击我</button>
      {/*传递自定义参数 */}
      <button onClick={() => click('rose')}>传递自定义参数</button>
      {/*既想传递自定义参数，又想传递事件本身参数*/}
      <button onClick={(e) => click2(e, 'rose2')}>既要又要</button>
      {/*使用组件*/}
      <MButton />
      <MButton></MButton>

      <button onClick={addCountClick}>{count2}</button>
      <button onClick={fixFormName}>修改form {form.name}</button>
      <p className="content">style的样式</p>
      {/*受控组件绑定 */}
      <input onChange={(e) => setValue(e.target.value)}></input>
      {/*获取DOM对象 */}
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取DOM</button>
    </div>
  );
}

export default App;
