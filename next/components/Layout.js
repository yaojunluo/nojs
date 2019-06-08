import Link from 'next/link'
import Head from 'next/head'
import Navinfo from './header/Navinfo'
import { Row, Col } from 'antd'
import '../static/css/app.css'

export default ({ children, title = 'Nojs' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Row type="flex" justify="center" align="middle">
      <Col xs={24} sm={24} md={20} lg={18} xl={16}>

        <header className="blog-header">
          {/* logo */}
          <div className="logo">

            <Link href='/'><img src="/static/img/nojs.png" /></Link>

          </div>
          {/* 定义右侧部分-导航、搜索、写推文、用户 */}
          <div className="right-header">
            <nav>
              <Link href='/'><a>博客</a></Link>
              <Link href='/about'><a>问答</a></Link>
              <Link href='/contact'><a>建议</a></Link>
            </nav>
            <Navinfo />
          </div>
        </header>
      </Col>
    </Row>

    {children}

    <footer>
      <div className="copyright">
        ©<a href="http://Aluo.ink">Aluo.ink</a> 版权所有 &nbsp;备案号：
        <a href="http://www.beian.miit.gov.cn">粤ICP备19008991号</a>
      </div>
    </footer>
    <style jsx>
      {
        `
        .copyright {
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 10px;
          width: 100%;

      }
      
      .copyright a {
          color: #303133;
      }
      `}
    </style>
  </div>
)