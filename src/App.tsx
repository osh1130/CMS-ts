import { useState } from 'react'
import { Button } from 'antd';
import {FastBackwardOutlined} from "@ant-design/icons"
//import {Outlet,Link} from "react-router-dom"
import {useRoutes, useLocation,useNavigate} from "react-router-dom"
import { useEffect } from 'react'
import router from './router'
import { message } from "antd"


// Component to go to the login page
function ToLogin(){
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/login");
    message.warning("You have not logged in, please log in and then visit！");
  },[])
  return <div></div>
  }
  
  // Component to go to the home page
  function ToPage1(){
    const navigateTo = useNavigate()
    useEffect(()=>{
      navigateTo("/page1");
      message.warning("you are already logged in！");
    },[])
    return <div></div>
  }

  // encapsulation route guard
  function BeforeRouterEnter(){
    const outlet = useRoutes(router);
    /*
    1. If you visit the login page and have a token, jump to the home page
    2. If the access is not the login page and there is no token, jump to the login page
    3. The rest can be released normally
    */
    const location = useLocation()
    let token = localStorage.getItem("cms-token");
    //1
    if(location.pathname==="/login" && token){
      return <ToPage1 />
    }
    //2、
    if(location.pathname!=="/login" && !token){
      return <ToLogin />
    }
    return outlet
}


function App() {
  //const outlet = useRoutes(router);
  return (
    <div className="App">
        {/* Placeholder component, window*/}
        {/* {outlet} */}
        <BeforeRouterEnter />
    </div>
  )
}

export default App
