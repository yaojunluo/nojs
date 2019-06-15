import dynamic from 'next/dynamic'
import Head from 'next/head'

const DynamicComponentWithNoSSR = dynamic(import('../components/write'), {
  ssr: false
})

export default () =>
  <div>
    <Head>
      <title>写博文</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <DynamicComponentWithNoSSR />
  </div>