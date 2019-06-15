import dynamic from 'next/dynamic'
import Head from 'next/head'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
const DynamicComponentWithNoSSR = dynamic(import('../components/edit'), {
    ssr: false
})

// export default withRouter(() =>
//   <div>
//     <Head>
//       <title>编辑博文</title>
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//     </Head>
//     <DynamicComponentWithNoSSR />
//   </div>)

class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Head>
                    <title>编辑博文</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <DynamicComponentWithNoSSR id={this.props.router.query.id} />
            </div>
        );
    }
}

export default withRouter(edit);