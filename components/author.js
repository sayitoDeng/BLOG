import React, { Component } from 'react';
import {Avatar,Divider} from 'antd';
import '../static/styles/components/author.css';
export default class author extends Component {
    render() {
        return (
            <div className="author-div comm-box">
                <div><Avatar size={100} src="https://wx1.sinaimg.cn/mw690/007bWFbuly8gefri6rmwuj30ut0mpdzd.jpg"/></div>
                <div className="author-introduction">
                    <Divider>社交账号</Divider>
                    <Avatar size={28} src="../static/images/github.png" className="account"></Avatar>
                    <Avatar size={28} src="../static/images/qq.png" className="account"></Avatar>
                    <Avatar size={28} src="../static/images/wechart.png" className="account"></Avatar>
                </div>
            </div>
        )
    }
}
