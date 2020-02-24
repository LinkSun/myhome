import React from 'react';
import {Route, Link } from 'react-router-dom';
function Approuter(){
    return (
        <router>
        <ul>
        <li Link to="./">首页</li>
        </ul>
        <router path='./'  component='index'/>
        
        
        </router>
    )
}
export default Approuter()