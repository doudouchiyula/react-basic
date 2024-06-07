//这个是整个项目的入口
//React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
//导入根组件
import App from './App';

//渲染到一个id为root的html中，即public下的index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

