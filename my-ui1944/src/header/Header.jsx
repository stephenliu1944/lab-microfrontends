import alienPNG from './images/alien.png';
import React from 'react';

export default function() {
    return (
        <ul className="header">
            <li>
                <img src={ alienPNG } />
            </li>
            <li>
                <p>模块1</p>
            </li>
            <li>
                <p>模块2</p>
            </li>
            <li>
                <p>模块3</p>
            </li>
            <li>
                <p>模块4</p>
            </li>
            <li>
                <p>模块5</p>
            </li>
        </ul>
    );
}