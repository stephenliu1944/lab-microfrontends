import styles from './home.css';
import React, { Component } from 'react';
import { Tabs } from 'antd';
import catPNG from './images/cat.png';
import { getIPInfo } from './services/demo';
import { module1 } from 'my-lib1944';
import { Component2 } from 'my-ui1944';

const { TabPane } = Tabs;
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: null
        };
    }

    componentDidMount() {
        /** 
         * 接口请求示例, 熟悉后请删除
         */
        getIPInfo('210.75.225.254').then(({ data }) => {
            this.setState({
                region: data
            });
        }, (error) => {
            console.error(error);
        });
    }

    render() {
        var { region } = this.state;

        return (
            <div className={styles.home}>
                <h1>App2 Home</h1>
                {/* 图片引入示例, 熟悉后请删除 */}
                <img src={catPNG} />

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                        {JSON.stringify(region)}
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        {module1()}
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <Component2 />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}