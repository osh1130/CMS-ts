import {DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom"

// After the login request receives the data, it can be matched with the items array
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
    label: 'page1',
    key: '/page1',
    icon: <PieChartOutlined />,
    },
    {
    label: 'page2',
    key: '/page2',
    icon: <DesktopOutlined />,
    },
    {
    label: 'page3',
    key: 'page3',
    icon: <UserOutlined />,
    children:[
    {
    label: 'page301',
    key: '/page3/page301',
    },
    {
    label: 'page302',
    key: '/page3/page302',
    },
    {
    label: 'page4',
    key: '/page3/page4',
    }
    ]
    },
    {
    label: 'page4',
    key: 'page4',
    icon: <TeamOutlined />,
    children:[
    {
    label: 'page401',
    key: '/page4/page401',
    },
    {
    label: 'page402',
    key: '/page4/page402',
    }
    ]
    },
    {
    label: 'page5',
    key: '/page5',
    icon: <FileOutlined />,
    }
    ];

const mainMenu: React.FC = () => {
        const navigateTo = useNavigate()
        const currentRoute = useLocation()
        
        //Process the current project that needs to be expanded
        let firstOpenKeys:string = ""
        function findKey(obj:{key:string}) {
            return obj.key === currentRoute.pathname;
        }
        for(let i =0;i<items.length;i++){
            if(items[i]!['children'] && items[i]!['children'].length>1&&items[i]!
            ['children'].find(findKey)){
            //console.log(items[i]!.key);
            firstOpenKeys = items[i]!.key as string;
            break;
        }
        }

        // openKeys All currently expanded arrays will be empty at the beginning and will not be displayed by default
        const [openKeys, setOpenKeys] = useState([firstOpenKeys]);


        const menuClick = (e:{key:string})=>{
            navigateTo(e.key);
        }

        const hdOpenChange = (keys:string[])=>{
            // Execute the code here when you click to expand and contract
            // console.log(keys); 
            // set as last
            setOpenKeys([keys[keys.length-1]]);
            }

        return (
            <Menu theme="dark" 
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline" items={items} 
            onClick={menuClick} 
            onOpenChange={hdOpenChange} 
            // openKeys Represents all currently expanded arrays
            openKeys={openKeys}/>)

    }
    
export default mainMenu