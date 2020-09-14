import '../src/styles/index.less';
import { Header, Component2 } from '../src/index';
import React from 'react';
import { render } from 'react-dom';

render(
    <div>
        <Header/>
        <Component2/>
    </div>,
    document.querySelector('#app')
);
