import React, { Component } from 'react';
import '../static/styles/components/header.css';
import {Row,Col,Menu} from 'antd';
import {HomeOutlined,YoutubeOutlined,SmileOutlined } from '@ant-design/icons';
import Head from 'next/head'

export default class header extends Component {
    
    
    render() {
        return (
            <>
            <Head>
                <title>Home</title>
                {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                { <script>
                    {
                    `             
                with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js'];
                `
                }
                
                </script>
                /*<script>
                    {
                    `             
                with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='../static/live2d/live2d.js'];
                `
                }
                
                </script>
                <script>
                    {
                    `             
                with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='../static/live2d/message.js'];
                `
                }
                
                </script> */} 
            </Head>
            <div id="landlord">
                <div className="message"></div>
                <canvas id="live2d" width="300" height="400" className="live2d"></canvas>
            </div>
            <div className="header">
                <Row type="flex" justify="center">
                    <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className="header-logo">深海王八</span>
                    </Col>

                    <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu  mode="horizontal">
                            <Menu.Item key="home">
                                <HomeOutlined />
                                首页
                            </Menu.Item>
                            {/* <Menu.Item key="video">
                                <YoutubeOutlined />
                                视频
                            </Menu.Item> */}
                            <Menu.Item key="life">
                                <SmileOutlined />
                                生活
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}
