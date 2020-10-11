import React, { Component, useState, useEffect } from 'react';
import '../static/styles/components/header.css';
import { Row, Col, Menu, Affix, Button } from 'antd';
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons';
import Head from 'next/head'
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import Live2d from '@xfe-team/live2d';
import dynamic from 'next/dynamic';
import classnames from 'classnames';

const DynamicPublish = dynamic(
    import('@xfe-team/live2d'),
    {
        ssr: false   //这个要加上,禁止使用 SSR
    }
)
export default function header() {

    const [navArray, setNavArray] = useState([])
    const [scrollActive, setScrollActive] = useState(false)
    const [isHome, setIsHome] = useState(false)

	// 滚动条
	const scrollHandler = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop >= 200) {
			setScrollActive(true)
		} else {
			setScrollActive(false)
		}
    }
    Router.events.on('routeChangeComplete', (...args) => {
		if (location.pathname === '/index' || location.pathname == '/') {
			setIsHome(true)
			scrollHandler();
			window.addEventListener('scroll', scrollHandler, false);
		} else {
			setIsHome(false)
			setScrollActive(false)
			window.removeEventListener('scroll', scrollHandler, false)
		}
	})
    useEffect(() => {
        if (location.pathname === '/index' || location.pathname == '/') {
			scrollHandler();
			setIsHome(true)
			window.addEventListener('scroll', scrollHandler, false);
		}
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()


    }, [])

    //跳转到列表页
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }


    }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            
                <div className={classnames({ 'header': true,'homeHeader': isHome,  'scrollActive': scrollActive })}>
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                            <a className="header-logo" onClick={() => { Router.push('/') }} >深海王八</a>
                        </Col>

                        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                            <Menu
                                mode="horizontal"
                                onClick={handleClick}
                                theme="null"
                            >
                                <Menu.Item key="0">
                                    <HomeOutlined />
                                首页
                            </Menu.Item>
                                {
                                    navArray.map((item) => {
                                        return (
                                            <Menu.Item key={item.Id}>
                                                {item.typeName}
                                            </Menu.Item>
                                        )
                                    })
                                }
                                {/* <Menu.Item key="life">
                                <SmileOutlined />
                                生活
                            </Menu.Item> */}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            
            <div className="live2d-wapper">
                <DynamicPublish
                    modelJsonUrl="../static/live2d/Kanna/Kanna.model.json"
                    width="300"
                    height="300"
                />
            </div>

        </>
    )

}
