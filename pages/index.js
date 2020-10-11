import Head from 'next/head'
import Link from 'next/link';
import {Row, Col,List} from 'antd'
import 'antd/dist/antd.css';
import '../static/styles/pages/index.css'
import Header from '../components/header';
import React,{useState} from 'react';
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';
import Author from '../components/author.js';
import Footer from '../components/footer.js';
import dynamic from 'next/dynamic'
import axios from 'axios';
import  servicePath  from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const LazyImg = dynamic(import('../components/LazyImg'))

Home.getInitialProps = async()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}
export default function Home(list) {
  //console.log(list)
  const [mylist,setMylist] = useState(list.data)
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  }); 
  
  return (
    <>
       <Head>
        <title>Home</title>
       </Head> 
      <Header/>
      
      <Row className="header-banner-box">
          <Col xs={0} sm={0} md={24}>
            <div className="header-banner">
              <LazyImg background={true} params="?imageslim" src='../static/images/banner.png' >
                
              </LazyImg>
            </div>
          </Col>
        </Row>
      <Row className="content-box" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item=>(
              <List.Item>
                <div className="list-title">
                <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                  <a>{item.title}</a>
                </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><FireOutlined />{item.view_count}人</span>
                </div>
                <div className="list-context"
                  dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                ></div> 
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
