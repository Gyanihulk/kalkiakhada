import { ApolloProvider } from '@apollo/client'
import { PageLayout } from 'components/PageLayout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import withData from '../lib/withData'

import '../styles/index.scss'

const handleRouteChangeStart = () => {
  console.log('route change start')
}

const handleRouteChangeComplete = () => {
  console.log('route change complete')
}

const handleRouteChangeError = () => {
  console.log('route change error')
}

function MyApp({ Component, pageProps, apollo }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [router])

  return (
    <ApolloProvider client={apollo}>
      <PageLayout>
      <Auth isProtected={Component.auth}>
        <Component {...pageProps} />
      </Auth>
      </PageLayout>
      
    </ApolloProvider>
  )
}

function Auth({ isProtected = false, children }) {
  if (!isProtected) {
    return children
  }

  return <CheckAuth>{children}</CheckAuth>
}

function CheckAuth({ children }) {
  const { data, loading } = useUser()

  const router = useRouter()

  useEffect(() => {
    if (loading) {
      return
    }

    if (!data?.id) {
      router.push('/login')
    }
  }, [data, loading])

  if (data?.id) {
    return children
  }
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps.query = ctx.query

  pageProps.layoutName = Component?.layoutName || 'default'

  return { pageProps }
}

export default withData(MyApp)
