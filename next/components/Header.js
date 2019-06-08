import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

// export default () => (
//     <div>
//         <Head>
//             <title>My page title</title>
//             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         </Head>
//         <Link href='/'>Home</Link>
//         <Link href='/about'>About</Link>
//         <Link href='/error'>Error</Link>
//     </div> 
// )

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hello: 'hello'
         };
    }

    render() {
        return (
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/error'>Error</Link>
            </div>
        )
    }
}



// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually

function onClickHandler(href) {
    return (e) => {
        e.preventDefault()
        Router.push(href)
    }
}

const Link = ({ children, href }) => (
    <a href='#' onClick={onClickHandler(href)}>
        {children}
        <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
    </a>
)