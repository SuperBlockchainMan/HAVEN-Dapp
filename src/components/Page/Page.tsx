import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    {/* <Footer /> */}
  </StyledPage>
)

const StyledPage = styled.div`
  
  padding-bottom: 56px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 32px;
  position: relative;
  background: linear-gradient(180deg,#98dff2,#98dff2 35%,#f0efed);
  background-color: #f0efed;
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export default Page
