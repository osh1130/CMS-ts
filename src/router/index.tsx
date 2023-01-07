import Home from "../views/Home"
import Login from "../views/Login"

// Navigate 
import {Navigate} from "react-router-dom"
import React,{ lazy } from 'react'

const withLoadingComponent = (comp:JSX.Element)=>{
    return <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
    </React.Suspense>
}
    

const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

const routes = [
{
        path:"/login",
        element:<Login/>
},
{
    path:"/", //redirect home
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

// Visit the rest directly to the home page：
{
    path:"*",
    element:<Navigate to="/page1"/>
},
    

]
export default routes