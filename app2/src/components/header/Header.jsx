import styles from './header.css';
import React, { Component } from 'react';
import { Header as HeaderUI } from 'my-ui1944';

/**
 * @desc 页面顶部组件
 */
export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderUI />
        );
    }
}
