import "antd/dist/antd.css";
import { Layout } from "antd";
import { Menu } from 'antd';
import { Row, Col} from "antd";
import { useHistory } from 'react-router';
import { Button } from 'antd';
//import { Icon } from '@ant-design/icons';
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { Header} = Layout;

function Navbar() {
  const history = useHistory()
  const homeButton=()=>{
      history.replace('/')
  }
  const globalButton=()=>{
    if(history.location.pathname==="/")
    history.push('/Global')
    else if(history.location.pathname==="/Global")
    return
    else if (history.location.pathname==="/Country")
    history.replace('/Global')
}
const countryButton=()=>{
    if(history.location.pathname==="/")
    history.push('/Global')
    else if(history.location.pathname==="/Global")
    history.replace('/Country')
    else if (history.location.pathname==="/Country")
    return
}
    return (
        <div>
            <Layout>
                <Header>
                <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        style={{ lineHeight: '64px' }}
                        breakpoint="lg"
                        collapsedWidth="0"
                    >

                        <Row key="1" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={12} key="1">
                                <Menu.Item key="1"><Button onClick={homeButton}>World of Corona</Button></Menu.Item>
                            </Col>
                            <Col span={6} key="2">
                                <Menu.Item key="2"><Button onClick={globalButton}>Global Statistics</Button></Menu.Item>
                            </Col>
                            <Col span={6} key="3">
                                <Menu.Item key="3"><Button onClick={countryButton}>Contry Wise Statistics</Button></Menu.Item>
                            </Col>
                        </Row>
                    </Menu>
                    </Header>
            </Layout>
        </div>
    )
}

export default Navbar
