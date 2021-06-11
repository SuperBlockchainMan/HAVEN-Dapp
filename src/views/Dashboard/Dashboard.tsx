import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import { Input } from '@material-ui/core'
import * as bsc from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { useMediaQuery } from 'react-responsive'
import HAVENABI from '../../constants/abi/HAVEN.json'
import WBNBABI from '../../constants/abi/WBNB.json'
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
  const wallet = bsc.useWallet()

  const [maxTransaction, setMaxTransaction] = useState('')
  const [totalBNB, setTotalBNB] = useState('')
  const [BNBPrice, setBNBPrice] = useState(0)
  const [HAVENPrice, setHAVENPrice] = useState(0)
  const [currencyPrice, setCurrencyPrice] = useState('')
  const [currentBalance, setCurrencyBalance] = useState(0)

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )
  const HAVENContract = new web3.eth.Contract(
    HAVENABI as unknown as AbiItem,
    '0xbd829ad7540e127c9ad6231457693dcac1938ee2',
  )

  const WBNBContract = new web3.eth.Contract(
    WBNBABI as unknown as AbiItem,
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  )

  const getBNBPrice = async () => {
    const prices = await fetch(
      'https://api3.binance.com/api/v3/ticker/price',
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    setBNBPrice(prices[98].price)
  }

  const getMaxTransactionAmount = async () => {
    const maxTransactionAmount = await HAVENContract.methods
      ._maxTxAmount()
      .call()
    setMaxTransaction('$HAVEN ' + maxTransactionAmount / 1000000000)
    console.log('pooh, maxTxAmount = ', maxTransactionAmount)
  }

  const getTotalLiquidityPool = async () => {
    console.log('pooh, totalLiquidityPool = ')
  }

  const getTotalBNBInLiquidityPool = async () => {
    const totalBNBInLiquidityPool = await WBNBContract.methods
      .balanceOf('0x73e3242116d8338eb2447a40228ef2b2fb9b9994')
      .call()
    setTotalBNB(
      web3.utils.fromWei(
        web3.utils.toBN(totalBNBInLiquidityPool).toString(),
        'ether',
      ) + ' BNB',
    )
  }

  const getCurrentHAVENPrice = async () => {
    const totalBNBInLiquidityPool = await WBNBContract.methods
      .balanceOf('0x73e3242116d8338eb2447a40228ef2b2fb9b9994')
      .call()
    const totalHAVENInLiquidityPool = await HAVENContract.methods
      .balanceOf('0x73e3242116d8338eb2447a40228ef2b2fb9b9994')
      .call()

    const price = web3.utils
      .toBN(totalBNBInLiquidityPool)
      .div(web3.utils.toBN(totalHAVENInLiquidityPool))
      .toNumber()

    setHAVENPrice(price / 1000000000)
    setCurrencyPrice((price / 1000000000).toString() + ' BNB')
  }

  const getCurrentHAVENBalance = async () => {
    const balance = await HAVENContract.methods.balanceOf(wallet.account).call()
    setCurrencyBalance(web3.utils.toBN(balance).toNumber() / 1000000000)
  }

  getBNBPrice()
  getMaxTransactionAmount()
  getTotalLiquidityPool()
  getTotalBNBInLiquidityPool()
  getCurrentHAVENPrice()
  getCurrentHAVENBalance()

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
            balance={currentBalance}
            price={HAVENPrice * BNBPrice}
          />
        </StyledDetail>
        <StyledContractArea>
          <WriteClaim />
          <StyledContractDetail>
            <ReadContractItem
              icon={mainImg}
              title="Max Transaction Amount"
              description={maxTransaction}
            />
            <ReadContractItem
              icon={mainImg}
              title="Total Liquidity Pool"
              description="$ 3,044,668.38"
            />
            <ReadContractItem
              icon={mainImg}
              title="Total BNB in liquidity pool"
              description={totalBNB}
            />
            <ReadContractItem
              icon={mainImg}
              title="Current 100,000 HAVEN price"
              description={currencyPrice}
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
