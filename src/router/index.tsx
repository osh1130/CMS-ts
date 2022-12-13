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

const routes = [
{
    path:"/", //重定向到home
    element:<Navigate to="/home" />,
},
{
    path:"/home",
    element:<Home/>,
},
{
    path:"/about",
    element:withLoadingComponent(<About/>),
}
// { path: "*", element: <Navigate to="/" /> },
]
export default routes