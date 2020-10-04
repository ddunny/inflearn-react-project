import React from 'react';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import User from './user/container/User';
import Search from './search/container/Search';

export default function App() {
  return (
    <>
    <Route exact path="/" component={Search}></Route>
    <Route path="/user/:name" component={User}></Route>
    </>
  );
}
