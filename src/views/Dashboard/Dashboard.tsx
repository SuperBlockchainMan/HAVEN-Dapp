import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { Input } from '@material-ui/core'
import * as bsc from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { useMediaQuery } from 'react-responsive'
import ERC20ABI from '../../constants/abi/HAVEN.json'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import Binance from 'binance-api-node'
import mainImg from '../../assets/img/icon.png'
import { useHistory } from 'react-router-dom'
import WriteClaim from './components/WriteClaim'
import ReadContractItem from './components/ReadContractItem'

const binance = Binance()

let startTime = new Date()
let endTime = new Date('03/23/2021 5:16')
let launchTime = Math.abs(startTime.getTime() - endTime.getTime())

const Home: React.FC = () => {
  const history = useHistory()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  const [tokenPrice, setNum] = useState(0)

  const getBnbPrice = async () => {
    let ticker = await binance.prices({ symbol: 'BNBUSDT' })
    let price = Number(ticker['BNBUSDT'])
    setNum(price / 620000)
  }
  getBnbPrice()

  const { account }: { account: any } = bsc.useWallet()

  const wallet = bsc.useWallet()

  let description = (
    <div
      style={{
        textAlign: 'center',
        fontSize: '26px',
        fontFamily: 'Optima',
        color: 'black',
        lineHeight: '48px',
        fontWeight: 'bold',
      }}
    >
      <span>Join The Presale</span>
    </div>
  )

  const [leftTime, setCountTime] = useState(0)

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )
  const presaleContract = new web3.eth.Contract(
    ERC20ABI as unknown as AbiItem,
    '0x703b17E4BAB6f44af7DDB2F19D3Bf146153e9FF3',
  )

  const getLeftTime = async () => {
    // const maxTxAmount = await presaleContract.methods._maxTxAmount()
    console.log('pooh, maxTxAmount = ', presaleContract.methods)
    // const leftTimeNum = await presaleContract.methods.getLeftTimeAmount().call()
    // setCountTime(new BigNumber(leftTimeNum).toNumber() * 1000)
  }
  getLeftTime()

  const [depositInput, setDepositNum] = useState(0)

  const depositInputChange = (e: any) => {
    let depositVal = e.target.value
    setDepositNum(depositVal)
  }

  console.log('pooh, wallet account = ', wallet.account)

  if (wallet.account == null) {
    history.push('/')
  }

  return (
    <Page>
      <StyledRowArea>
        <StyledDetail>
          <PageHeader
            icon={
              <img style={{ width: 120, borderRadius: 25 }} src={mainImg} />
            }
            title="HAVEN"
            description="Earn BNB by Holding HAVEN"
            account={wallet.account}
          />
        </StyledDetail>
        <StyledContractArea>
          <WriteClaim />
          <StyledContractDetail>
            <ReadContractItem
              icon={mainImg}
              title="Max Transaction Amount"
              description={'1,000,000 MKAT | 2.6 BNB'}
            />
            <ReadContractItem
              icon={mainImg}
              title="Total Liquidity Pool"
              description="$ 3,044,668.38"
            />
            <ReadContractItem
              icon={mainImg}
              title="Total BNB in liquidity pool"
              description="0 BNB"
            />
            <ReadContractItem
              icon={mainImg}
              title="Current 100,000 MKAT price"
              description="0.26 BNB"
            />
          </StyledContractDetail>
        </StyledContractArea>
      </StyledRowArea>
    </Page>
  )
}

const StyledRowArea = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const StyledDetail = styled.div`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`

const StyledContractArea = styled.div`
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
  pading: 10px;
`

const StyledContractDetail = styled.div`
  width: 100;
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default Home
