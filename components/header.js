import React, { Component,useState,useEffect } from 'react';
import '../static/styles/components/header.css';
import {Row,Col,Menu} from 'antd';
import {HomeOutlined,YoutubeOutlined,SmileOutlined } from '@ant-design/icons';
import Head from 'next/head'
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';
export default function header () {
    
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])
    
        //跳转到列表页
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }


    }
        return (
            <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="header">
                <Row type="flex" justify="center">
                    <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className="header-logo">深海王八</span>
                    </Col>

                    <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu  
                            mode="horizontal"
                            onClick={handleClick}
                        >
                            <Menu.Item key="0">
                                <HomeOutlined />
                                首页
                            </Menu.Item>
                            {
                                navArray.map((item)=>{
                                return(
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
            </>
        )
    
}
