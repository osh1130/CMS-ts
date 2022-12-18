import React, { useState } from 'react';
import {Outlet} from "react-router-dom"
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import MainMenu from "@/components/MainMenu"

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
        
    return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={value =>
    setCollapsed(value)}>
        {/* 侧边栏顶部logo */}
        <div className="logo" ></div>
        {/* 主菜单*/}
        <MainMenu></MainMenu>
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