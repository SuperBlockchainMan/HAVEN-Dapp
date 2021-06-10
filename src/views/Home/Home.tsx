import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import AccountButton from '../../components/TopBar/components/AccountButton'
import TopBar from '../../components/TopBar'

const StyledContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin: auto;
  max-width: 400px;
  width: 100%;
  padding: 30px;
  padding-bottom: 40px;
  position: relative;
  border: 1px solid #81cd2c;
  border-radius: 20px;
  font-family: 'Nunito';
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

const StyledIcon = styled.img`
  width: 100px;
`

const StyledDescription = styled.div`
  border: 1px solid #81cd2c;
  margin-top: 15px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

const StyledStatus = styled.div`
  color: #81cd2c;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 20px;
`

const StyledAccountButton = styled.div`
  margin-top: 20px;
  align-items: center;
  width: auto;
  @media (max-width: 767px) {
    justify-content: center;
    width: auto;
  }
`

const Home: React.FC = () => {
  return (
    <Page>
      <TopBar />
      <StyledContainer>
        <StyledIcon src="assets/image/icon.png" />
        <div> Welcome to HAVEN Dapp </div>
        <StyledDescription>
          <StyledStatus> You are not connected to HAVEN Dapp yet </StyledStatus>
          <div>
            To use the Dapp, make sure: <br />
            <span>
              You are using the <span>Binance Smart Chain</span> network
            </span>
            <br />
            <span>and you need to connect wallet to use</span>
            <br />
          </div>
        </StyledDescription>
        <StyledAccountButton>
          <AccountButton />
        </StyledAccountButton>
      </StyledContainer>
    </Page>
  )
}

export default Home
