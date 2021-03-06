import React,{useState} from 'react';
import Head from 'next/head';
import {Row, Col  ,Breadcrumb,Affix,BackTop   } from 'antd';

import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';
import '../static/styles/pages/detailed.css';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import '../static/styles/pages/comm.css';
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';
import axios from 'axios';
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx';
import  servicePath  from '../config/apiUrl';


detailed.getInitialProps = async(context)=>{

    let id =context.query.id
    const promise = new Promise((resolve)=>{
  
      axios(servicePath.getArticleById+id).then(
        (res)=>{
          resolve(res.data.data[0])
        }
      )
    })
  
    return await promise
  }

export default function detailed (article) {
    const renderer = new marked.Renderer();
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
      };
    marked.setOptions({
        renderer: renderer, 
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
    }); 
    hljs.configure({ useBR: true });
    

    const tocify = new Tocify()
    
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    let html = marked(article.article_content) 
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
                        {/* <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        <Breadcrumb.Item>xxxx</Breadcrumb.Item> */}
                        </Breadcrumb>
                    </div>

                    <div>
                        <div className="detailed-title">
                        {article.title}
                        </div>

                        <div className="list-icon center">
                            <span><CalendarOutlined  /> {article.addTime}</span>
                            <span><FolderOutlined /> detail content</span>
                            <span><FireOutlined /> {article.view_count}人</span>
                        </div>

                        <div className="detailed-content" 
                            dangerouslySetInnerHTML={{__html:html}}
                        >
                            {/* <ReactMarkdown 
                                source={markdown} 
                                escapeHtml={false}  
                            /> */}
                            
                        </div>

                    </div>

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={52}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                    
                </Col>
            </Row>
            <BackTop>
                <div  style={style}>↑</div>
            </BackTop>
            <Footer/>
        </>
        )
    
}
