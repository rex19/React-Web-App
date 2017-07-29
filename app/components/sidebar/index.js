import React from 'react';
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'
import globalConfig from '../../config.js';
import './index.less';
import { sidebarCollapseCreator } from '../../redux/Sidebar.js'
import items from '../../menu.js';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


class Sidebar extends React.PureComponent {

  this.state = {
  openKeys: [],  // 当前有哪些submenu被展开
}

transFormMenuItem(obj, paths, isLevel1) {
  const parentPath = paths.join('/');   // 将各级父目录组合成完整的路径
  logger.debug('transform %o to path %s', obj, parentPath);

  return (
    <MenuItem key={obj.key} style={{ margin: '0px' }}>
      {obj.icon && <Icon type={obj.icon} />}
      {/*对于level1的菜单项, 如果没有图标, 取第一个字用于折叠时显示*/}
      {isLevel1 && !obj.icon && <span className="invisible-nav-text">{obj.name[0]}</span>}
      <Link to={`/${parentPath}`} style={{ display: 'inline' }}><span className="nav-text">{obj.name}</span></Link>
    </MenuItem>
  );
}

componentWillMount() {
  const paths = [];  // 暂存各级路径, 当作stack用
  const level1KeySet = new Set();  // 暂存所有顶级菜单的key
  const level2KeyMap = new Map();  // 次级菜单与顶级菜单的对应关系

  const menu = items.map((level1) => {  //level1是es6 map方法拿出每个数据元素
    paths.push(level1.key)  //把一级菜单的key放到数组
    level1KeySet.add(level1.key)  //把一级菜单的key放到set

    if (this.state.openKeys.length === 0) {
      this.state.openKeys.push(level1.key);  // 默认展开第一个菜单, 直接修改state, 没必要setState
    }

    if (level1.child) {
      const level2menu = level1.child.map((level2) => {
        // parse二级菜单
        paths.push(level2.key);
        level2KeyMap.set(level2.key, level1.key);

        if (level2.child) {
          const level3menu = level2.child.map((level3) => {
            // parse三级菜单, 不能再有子菜单了, 即使有也会忽略
            paths.push(level3.key);
            const tmp = this.transFormMenuItem(level3, paths);
            paths.pop();
            return tmp;
          });

          paths.pop();

          return (
            <SubMenu key={level2.key}
              title={level2.icon ? <span><Icon type={level2.icon} />{level2.name}</span> : level2.name}>
              {level3menu}
            </SubMenu>
          );

        } else {
          const tmp = this.transFormMenuItem(level2, paths);
          paths.pop();
          return tmp;
        }
      });

      paths.pop();

      let level1Title;
      // 同样, 如果没有图标的话取第一个字
      if (level1.icon) {
        level1Title = <span><Icon type={level1.icon} /><span className="nav-text">{level1.name}</span></span>;
      } else {
        level1Title = <span><span className="invisible-nav-text">{level1.name[0]}</span><span
          className="nav-text">{level1.name}</span></span>;
      }

      return (
        <SubMenu key={level1.key} title={level1Title}>
          {level2menu}
        </SubMenu>
      )
    } else {
      const tmp = this.transFormMenuItem(level1, paths, true);
      paths.pop();  // return之前别忘了pop
      return tmp;
    }
  })
  this.menu = menu;
  this.level1KeySet = level1KeySet;
  this.level2KeyMap = level2KeyMap;
}




render() {
  return (
    <div>
      <h1>sidebar</h1>
    </div>
  )
}

}

export default Sidebar