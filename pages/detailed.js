import React,{useState} from 'react';
import Head from 'next/head';
import {Row, Col  ,Breadcrumb,Affix  } from 'antd';

import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';
import '../static/styles/pages/detailed.css';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import '../static/styles/pages/comm.css';
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';

export default function detailed () {
    let markdown='# p01:React用于构建用户界面的 JavaScript 库\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p05:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:React用于构建用户界面的 JavaScript 库\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
    
        return (
            <>
            <Head>
                <title>detailed</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                <div>
                    <div className="bread-div">
                        <Breadcrumb>
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div>
                        <div className="detailed-title">
                        detailed demo
                        </div>

                        <div className="list-icon center">
                            <span><CalendarOutlined  /> 2019-06-28</span>
                            <span><FolderOutlined /> detail content</span>
                            <span><FireOutlined /> 5498人</span>
                        </div>

                        <div className="detailed-content" >
                            <ReactMarkdown 
                                source={markdown} 
                                escapeHtml={false}  
                            />
                        </div>

                    </div>

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                                className="article-menu"
                                source={markdown}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                    
                </Col>
            </Row>
            <Footer/>
        </>
        )
    
}
