import styles from './home.css';
import React, { Component } from 'react';
import { Tabs } from 'antd';
import catPNG from './images/cat.png';
import { getIPInfo } from './services/demo';
import Component1 from './components/component1/Component1';

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
                <h1>Home1</h1>
                {/* 图片引入示例, 熟悉后请删除 */}
                <img src={catPNG} />

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                        {JSON.stringify(region)}
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}