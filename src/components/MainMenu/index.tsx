import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];
// 登录请求到数据之后就可以跟items这个数组匹配了
const items: MenuItem[] = [
    {
    label: '栏目 1',
    key: '/page1',
    icon: <PieChartOutlined />,
    },
    {
    label: '栏目 2',
    key: '/page2',
    icon: <DesktopOutlined />,
    },
    {
    label: '栏目 3',
    key: 'page3',
    icon: <UserOutlined />,
    children:[
    {
    label: '栏目 301',
    key: '/page3/page301',
    },
    {
    label: '栏目 302',
    key: '/page3/page302',
    },
    {
    label: '栏目 303',
    key: '/page3/page303',
    }
    ]
    },
    {
    label: '栏目 4',
    key: 'page4',
    icon: <TeamOutlined />,
    children:[
    {
    label: 'Team 1',
    key: '/page4/page401',
    },
    {
    label: 'Team 2',
    key: '/page4/page402',
    }
    ]
    },
    {
    label: '栏目 5',
    key: 'page5',
    icon: <FileOutlined />,
    }
    ];

    const mainMenu: React.FC = () => {
        const navigateTo = useNavigate()
        const currentRoute = useLocation()
        console.log("加载了菜单",currentRoute); 

        const menuClick = (e:{key:string})=>{
            //console.log("点击了菜单", e.key);
            // 点击跳转到对应的路由 编程式导航跳转， 利用到一个hook
            console.log("加载了菜单",currentRoute); 
            navigateTo(e.key);
        }

        return (
            <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]}
 mode="inline" items={items} onClick={menuClick}/>)

    }
    
    export default mainMenu