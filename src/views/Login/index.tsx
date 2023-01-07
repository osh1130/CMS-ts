import { ChangeEvent, useEffect,useState } from 'react'
import initLoginBg from "./init.ts"
import styles from "./login.module.scss"
import { Button, Input, Space,message } from 'antd';
import { LoginAPI } from "@/request/api.ts"
import { useNavigate } from "react-router-dom"


const View = ()=> {
    const navigateTo = useNavigate()
    
    // Background processing, load the background after loading this component
    //[]means simulation componentDidMounted
    useEffect(()=>{
        initLoginBg()
        window.onresize = function(){initLoginBg()}
    },[]);

    //Get user input information
    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    
    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value)
    }

    //Login button click event
    const gotoLogin = async ()=>{
        //console.log("The user name, password and verification code entered by the user are：",
        //usernameVal,passwordVal);
        // Initiate a login request
         let loginAPIRes:LoginAPIRes = await LoginAPI({
             username: usernameVal,
             password: passwordVal,
             })
             console.log(loginAPIRes);
              if(loginAPIRes.errCode===0){
                  // 1、Prompt that the operation is successful
                  message.success('login successful！');
                  // 2、save token
                  localStorage.setItem("cms-token",loginAPIRes.data['cms-token'])
                  // 3、Jump to /page1 page
                  navigateTo("/page1")
              }
    }
    

    return (
        <div className={styles.loginPage}>
            {/*store background*/}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/*Login box */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>Vivi&nbsp;·&nbsp;cms
                    </h1>
                    <p>Strive Everyday</p>
                </div>

                <div className='from'>
                <Space direction="vertical" size="large" style={{ display: 'flex'
                }}>
                <Input placeholder="username" className='ipt' onChange={usernameChange}/>
                <Input.Password placeholder="password" className='ipt' onChange={passwordChange}/>
                <Button type='primary' block onClick={gotoLogin}>Login</Button>
                </Space>
                </div>    
            </div>
        </div>
    )
}
export default View