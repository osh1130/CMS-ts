import Home from "../views/Home"

// Navigate 重定向组件
import {Navigate} from "react-router-dom"
import React,{ lazy } from 'react'

const withLoadingComponent = (comp:JSX.Element)=>{
    return <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
    </React.Suspense>
    }
    

const About = lazy(() => import("../views/About"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

const routes = [
{
    path:"/", //重定向到home
    element:<Navigate to="/page1" />,
},
{
    path:"/",
    element:<Home/>,
    children:[
        {
        path:"/page1",
        element: withLoadingComponent(<Page1 />)
        },
        {
        path:"/page2",
        element: withLoadingComponent(<Page2 />)
        }
        ,
        {
        path:"/page3/page301",
        element: withLoadingComponent(<Page301 />)
        }
        ]
        
},
// 访问其余的都直接到首页：
{
    path:"*",
    element:<Navigate to="/page1"/>
    },
    
//{
//    path:"/about",
//    element:withLoadingComponent(<About/>),
//},
//{
//    path:"/page1",
//    element:withLoadingComponent(<Page1/>),
//}
// { path: "*", element: <Navigate to="/" /> },
]
export default routes