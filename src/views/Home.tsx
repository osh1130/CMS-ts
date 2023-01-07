import React, { useState } from 'react';
import {Outlet} from "react-router-dom"
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import MainMenu from "@/components/MainMenu"

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
        
    return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* Sider */}
        <Sider collapsible collapsed={collapsed} onCollapse={value =>
    setCollapsed(value)}>
        {/* Sider logo */}
        <div className="logo" ></div>
        {/* MainMenu*/}
        <MainMenu></MainMenu>
        </Sider>
        {/* right */}
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{paddingLeft:
'16px' }}>
            {/* Breadcrumb */}
                <Breadcrumb className='crumb'>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {/* Content */}
            <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                {/* router */}
                <Outlet/>
            </Content>
            
            {/* footer */}
            <Footer style={{ textAlign: 'center' }}>cms-ts ©2022 Created by
    Vivi Zhao</Footer>
        </Layout>
    </Layout>
);
};
export default View;