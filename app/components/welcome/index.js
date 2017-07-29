import React from 'react';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 >
          Welcome, 这里是欢迎界面, 欢迎访问我的<a target="_blank" href="#">blog</a>.
        </h1>
      </div>
    );
  }

}

export default Welcome;
