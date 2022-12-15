import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Outlet,useNavigate} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return {
    key,
    icon,
    children,
    label,
} as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'),
    getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
    ];
const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigate();
    const menuClick = (e:{key:string}) =>{
        {/* console.log(e.key);*/}
        navigateTo(e.key) // ！！！【重点】获取点击到的key就是上面的这些数字，所以我们需要把上面的key换成对应路径
    }
        
    return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={value =>
    setCollapsed(value)}>
        {/* 侧边栏顶部logo */}
        <div className="logo" ></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items=
    {items} onClick={menuClick}/>
        </Sider>
        {/* 右侧界面 */}
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{paddingLeft:
'16px' }}>
            {/* 面包屑 */}
                <Breadcrumb className='crumb'>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {/* 内容部分 */}
            <Content style={{ margin: '16px' }}>
                {/* 窗口部分 */}
                <Outlet/>
            </Content>
            
            {/* 页脚部分 */}
            <Footer style={{ textAlign: 'center' }}>cms-ta ©2018 Created by
    Vivi Zhao</Footer>
        </Layout>
    </Layout>
);
};
export default View;