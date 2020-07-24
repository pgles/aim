import { Layout, Menu } from 'antd';
import TimeLine from './TimeLine.js';
import DoughnutChart from './DoughnutChart.js';
import React from 'react';
import { Input } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BellOutlined,
  SettingOutlined
} from '@ant-design/icons';
import Graph from './graph.js';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item><h1>MACHINE HACK</h1></Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" icon={<UserOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Hackathon
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Global ranking
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <Search placeholder="Type here for search" onSearch={value => console.log(value)} enterButton style={{
                position:'absolute',
                zIndex:1,
                margin:'14px 20px',
                width:'400px'
            }}/>
            <SettingOutlined style={{float:'right',marginRight:'20px',marginTop:'20px'}}/>
            <BellOutlined style={{float:'right',marginRight:'20px',marginTop:'20px'}}/>
            <UserOutlined style={{float:'right',marginRight:'20px',marginTop:'20px'}}/>
          </Header>
          <Content
            className="site-layout-background shadow row"
            style={{
              margin: '0px 20px',
              padding: 0,
              minHeight: 100,
              width:1275,
              background:'#fff'
            }}
          >
            <img src='../Lorem-Ipsum-alternatives.png' alt='Lorem Ipsum' height={400} width={1275}/>
            <Menu  mode="horizontal" defaultSelectedKeys={['1']} style={{
                position:'absolute',
                zIndex:1,
                width:'1290px',
                margin:'-57px -8px',
                height:'50px'
            }}>
                <Menu.Item key="1" className='fa'>HOME</Menu.Item>
                <Menu.Item key="2" className='fa'>DATA</Menu.Item>
                <Menu.Item key="3" className='fa'>LEADERBOARD</Menu.Item>
                <Menu.Item key="4" className='fa'>PARTICIPATE</Menu.Item>
            </Menu>
          </Content>
          <div className='rows'>
          <Content
            className="site-layout-background shadow row"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 300,
              width:865,
              background:'#fff'
            }}
          >
            <Graph />
          </Content>
          <Content
            className="site-layout-background shadow row"
            style={{
              margin: '24px 5px',
              padding: 24,
              minHeight: 500,
              width:400
            }}
          >
            <h1 style={{color:'blue'}}>General Statistics</h1>
            <DoughnutChart />
          </Content>
          <Content
            className="site-layout-background shadow row"
            style={{
                position:'absolute',
                zIndex:1,
              margin: '450px -1290px',
              padding: 24,
              minHeight: 300,
              width:865
            }}
          >
            <h1 style={{background:'#E6F7FF',width:'200px',paddingLeft:'10px',height:'60px',paddingTop:'15px',paddingBottom:'15px'}}>HACKATHON TIMELINE</h1>
            <TimeLine />
          </Content>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;