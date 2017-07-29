import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Menu, Icon} from 'antd';
import Logo from '../Logo';
import Logger from '../../utils/Logger';
import items from 'menu.js';  // 由于webpack中的设置, 不用写完整路径
import globalConfig from 'config.js';
import './index.less';
import {sidebarCollapseCreator} from '../../redux/Sidebar.js';

import items from '../../menu.js';  

class Sidebar extends React.PureComponent {

  render(){
    return(
      <div>
        <h1>sidebar</h1>
        </div>
    )
  }

}

export default Sidebar
