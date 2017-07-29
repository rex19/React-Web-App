import React, { Component } from 'react';

import { Spin, message, Tabs, Icon } from 'antd';
import './index.less'
import 'antd/dist/antd.css'
// import Hello from '../hello/index.js'
// import Login from '../login/index.js'
import Welcome from '../welcome/index.js'

import globalConfig from '../../config.js';
const TabPane = Tabs.TabPane;

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // tab模式相关的状态
      currentTabKey: '',  // 当前激活的是哪个tab
      tabPanes: [],  // 当前总共有哪些tab
    }
  }
  renderBody() {
    // tab模式下, 不显示面包屑
    if (globalConfig.tabMode.enable === true) {
      // 如果没有tab可以显示, 就显示欢迎界面
      // if (this.state.tabPanes.length === 0) {
      //   return <div className="ant-layout-container"><Welcome /></div>;
      // } else {
      //   return <Tabs activeKey={this.state.currentTabKey} type="editable-card"
      //     onEdit={this.onTabRemove} onChange={this.onTabChange}
      //     hideAdd className="ant-layout-tab">
      //     {this.state.tabPanes.map(pane => <TabPane tab={pane.title} key={pane.key}
      //       closable={true}>{pane.content}</TabPane>)}
      //   </Tabs>;
      // }
      console.log('globalConfig.tabMode.enable === true')
    }
    // 非tab模式, 显示面包屑和对应的组件
    else {
      console.log('globalConfig.tabMode.enable === false')
      return <div>
        {/* <Breadcrumb routes={this.props.routes} /> */}
        <div className="ant-layout-container">
          {this.props.children}
        </div>
      </div>;
    }
  }
  render() {
    return (
      <div className="ant-layout-base">
        {/*整个页面被一个ant-layout-base的div包围, 分为sidebar/header/footer/content等几部分*/}
        {/* <Sidebar /> */}

        <div id="main-content-div" >
          {/* <Header userName={this.props.userName}/>
          {this.renderBody()}
          <Footer /> */}
          {/* <Login /> */}
          {this.renderBody()}
        </div>
      </div>
    );
  }
}


