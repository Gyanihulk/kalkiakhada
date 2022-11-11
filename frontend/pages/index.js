import Landing from 'components/Landing/Landing'
import  Loading  from 'components/Loading/Loading'
import Reviews from 'components/Reviews'
import Skills from 'components/Skills'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
})

function PageIndex() {
  return (
    <>
    <Loading/>
      <Landing />
      <Skills />
      <Reviews />
    </>
  )
}

export default PageIndex
