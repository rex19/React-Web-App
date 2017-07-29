import React from 'react'

import globalConfig from '../../config.js';
import { message } from 'antd';
import './index.less';

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',  // 当前输入的用户名
      password: '',  // 当前输入的密码
      requesting: false, // 当前是否正在请求服务端接口
    }
  }


  // handleUsernameInput = (e) => {
  //   this.setState({ username: e.target.value });
  // }

  // handlePasswordInput = (e) => {
  //   this.setState({ password: e.target.value });
  // }


  // handleSubmit = async (e) => {  // async可以配合箭头函数
  //   e.preventDefault();  // 这个很重要, 防止跳转
  //   this.setState({ requesting: true });
  //   const hide = message.loading('正在验证...', 0);

  //   const username = this.state.username;
  //   const password = this.state.password;
  //   console.log('handleSubmit')

  // }

  render() {
    return (
      <div id="loginDIV">

        <div className="login">
          <h1>{globalConfig.name}</h1>
          <form >
            <input className="login-input" type="text" value={this.state.username}
              placeholder="用户名" required="required" />
            <input className="login-input" type="password" value={this.state.password}
               placeholder="密码" required="required" />
            <button className="btn btn-primary btn-block btn-large"
              type="submit" disabled={this.state.requesting}>
              登录
            </button>
          </form>
        </div>

      </div>
    )
  }
}
