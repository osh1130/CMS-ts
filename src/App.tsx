import { useState } from 'react'
import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import { Button } from 'antd';
import {FastBackwardOutlined} from "@ant-design/icons"
//import {Outlet,Link} from "react-router-dom"
import {useRoutes,Link} from "react-router-dom"
import router from './router';

function App() {
  //const [count, setCount] = useState(0)
  const outlet = useRoutes(router);
  return (
    <div className="App">
        <Link to="/home">home</Link> |
        <Link to="/about">about</Link>
        {/* 占位符组件，窗口，有点类似于Vue中的 router-view */}
        {outlet}
    </div>
  )
}

export default App
