import React from 'react';
import { Menu, Icon,Breadcrumb } from 'antd';
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu;

const Sider = React.createClass({
  getInitialState() {
    return {
      collapse: true,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="mis-logo">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAaCAYAAAAwspV7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAFAElEQVRIx82Xf2iVVRjHP8+7+75vppHKdJpmmmi1TdwWJhIW4h/C6IfVH2pBa7jd6TbduvOfoGT9kVBsN3Xq5oasWaCzlGkaBbYMKbWaXvNuZFAwaiStLc3UaaPTH++517Pjvf0hg3rgwPt8nx/nOc95znPOK4wi5UVVBtAEvAC8F4tI+Hb8OKMZFFCixxigNC+q7vw/BDXR+D4Zi8jV23ESGuWgGoHpwDDwxij7/m9JTCYvqqYDpcAcgiz2A+/HInIslXFeVI0BKoDZwCagHrgEHIxF5HAKfQ9YCDwIZAEK+BXoikXk9C1BaYPzwEzL14VYRKamCaoJKAO+BWqBA1r0N5AZi8jvWm+qlj8PjEuToK+ANbGInEkWugMLHZjpBN/mmFIQVeNtDwVRNcOB1Von7kC2YeM4esEFUfW4locdGJfCf2I84sDxgqjKTxZ6hjD/X7Y5C7hoAhlCOTcPShxG2Pd//bIMLnhbzQEOG9m5AewBvgD+BOYCa4ApWj4WeDMZVEjINpxeB3yDn6K3FoBFm9UYYLUhjwErDT6ufb5lBHQZWHKiWrrMxS3arDqAb4wFLkpunyvMcwX06HGFIYPPNB25wipXyNSyX1zhM1d4wNDvfmyLGu8KTxpYqx0QwIlqOesKBw29gWSmPCHHWmkWcI+xfRi6lQbbDMyyMttNcMIyDCxtT/SEKPA0QX+rcQAKG9Q0T5jgCejR7QkDBj854aCwQS32hHyND3tCiyfkGLp4QtwTPAsrK2xQGwsb1AQ7qKPr5UtPmOUJM4+ul/0hHWm2pRcHBgx+UposHeqolL7l21ROCvth4ApB8aKz9jrw2vJt6jhwBOjoqJQfAD5aJz+PSKkvzLOcdgODBp8FsGK7mgY8a+A7tH2ugfW1V8hFrV9D8GowKQQs0aNuxXYV1yXQ0l4hQ6AvZF/I9gX0uOwLvb4waGCTtN4aXwhp7LwvdGo8x9DtTszeXiE7fWGVL1ww5PbI9YWtvtD14g413Qwq11Dq2V0uyhcGDCyrtFF5vlBmYE27y0WVNirfF+YYeNxMy+5y2esL9+ng9vnCpTTBZfvCgdJGJaHKnUpgRE3FAXznlppaadTWVeAdrTfXOlndWNSyVm4Ae4G9lTuVCywGniLodea1swDIDfnCDOAu26kvI2pqIlBt8Hvqw0HdpKjHeE2zmgysA/rrw7LVFG4rk7+ATqCzplntIGic5vz3Op6Qax9nAE8YtPB847sx4cFqB8oTvvOEjz3hVU/Y8kqLWkoaqg/L955wzJqnP2SdHICeFJky6VRtyc3ObNn36qzmG9gTwKfpAtM7laBrwDnHWulgbYn06Qz0Wyu4JUtaL9tqulcs/RWbdqmxqQLatEu95AnzDd322hIZCnnOiOulJzmZkzJTvwH7EkxdqxoL3G/Iz20olv66VnUaKNDYVGB/XavasKFY4nWtygFygLUEb7EEXQQ2AoTc4PmQoDOJDzcIYAi4w5A3VRXLNUNnNiN/Ps5qvBY4ZODLgGVbWtUwwTvLvBMh6PzPVRXLTwCOK1zWt/MNV2hNaFUVy7ArfG7c3j+6wcWZJFf4wxWUlve5whFt+6ErVLvCsGGPK4RcIcPCulzh0api6Uz4leY29TCwHDgSLpKT5qTNbSqToJdcB94NF8mAtUKa29QzwDygLVwkvZbsISAMLAVmAHcTvKt6gVPAB8An4SJRpt0/29FYu37EISsAAAAASUVORK5CYII="/>
          </div>
          <Menu mode="vertical" theme="dark" defaultSelectedKeys={['user']}>
            <SubMenu key="order" title={<span className="sider-flex"><span className="iconfont">&#xe60b;</span><span>上单</span></span>}>
                <Menu.Item key="order1">

                <Link to={'/merchantTags'}><Icon type="" /><span className="nav-text">导航一</span></Link>
                </Menu.Item>
                <Menu.Item key="order2">
                <Link to={'/NotFound'}><Icon type="user" /><span className="nav-text">导航2</span></Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="shop" title={<span className="sider-flex"><span className="iconfont">&#xe60a;</span><span>商户</span></span>}>
                <Menu.Item key="shop1">
                <Link to={'/merchantTags'}><span className="iconfont icon-padding">&#xe60e;</span><span className="nav-text">商户</span></Link>
                </Menu.Item>
                <Menu.Item key="shop2">
                <Icon type="user" /><span className="nav-text">导航一</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="check" title={<span className="sider-flex"><span className="iconfont">&#xe607;</span><span>审核</span></span>}>
                <Menu.Item key="check1">
                <Icon type="user" /><span className="nav-text">导航一</span>
                </Menu.Item>
                <Menu.Item key="check2">
                <Icon type="user" /><span className="nav-text">导航一</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="setting" title={<span className="sider-flex"><span className="iconfont">&#xe609;</span><span>导航</span></span>}>
                <Menu.Item key="setting1">
                <Link to={'/settingOrg'}><span className="iconfont icon-padding">&#xe60f;</span><span className="nav-text">导航1</span></Link>
                </Menu.Item>
                <Menu.Item key="setting2">
                <span className="iconfont icon-padding">&#xe60c;</span><span className="nav-text">导航2</span>
                </Menu.Item>
                <Menu.Item key="setting3">
                <Link to={'/settingRole'}><span className="iconfont icon-padding">&#xe60d;</span><span className="nav-text">导航3</span></Link>
                </Menu.Item>
                <Menu.Item key="setting4">
                <Link to={'/settingAuth'}><span className="iconfont icon-padding">&#xe60e;</span><span className="nav-text">导航4</span></Link>
                </Menu.Item>
            </SubMenu>
          </Menu>
          {/* <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div> */}
        </aside>
        </div>
    );
  },
});
export default Sider;
