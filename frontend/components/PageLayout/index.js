import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'



export function PageLayout({ children }) {
 
  return (
    <div >
      <Header/>

      {children}

       <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.any,
}

export const PageLayoutStyled = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
`

export const InnerStyles = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  > * {
    flex: 1;
  }

  main {
    padding-top: ${({ height }) => height};
  }
`
export default PageLayoutStyled
