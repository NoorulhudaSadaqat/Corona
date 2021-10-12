import React from "react";
import "antd/dist/antd.css";
import "./GlobalStatistics.css";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function GlobalStatistics() {
  return (
    <div>
      <Layout className="layout">    
        <Sider>Sider</Sider>
        <Layout>
          <Header className='header'>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default GlobalStatistics;
