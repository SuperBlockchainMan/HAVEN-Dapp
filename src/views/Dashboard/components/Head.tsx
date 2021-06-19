import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'

const StyledNav = styled.nav`
  padding-left: 5rem;
  padding-right: 5rem;
  background: linear-gradient(
  0deg
  ,#98dff2,#98dff2 35%,#f0efed);
  background-color: #f0efed;
`
const Head  = ({
  
  }) => {
    const [ismobile, changeMobile] = useState(1);

    const { reset } = bsc.useWallet()
    const handleSignOutClick = useCallback(() => {
      reset()
    }, [reset])

    const changeState = () => {
      changeMobile(1-ismobile);
      return ''
    }


  const buyAddress =
  'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc'

  return (
      <StyledNav className="navbar navbar-light navbar-expand-md fixed-top">
          <div className="container-fluid">
            <div className="container" >
                <a className="navbar-brand" data-nsfw-filter-status="swf">
                    <button data-bs-toggle="collapse" className="navbar-toggler collapsed" onClick={changeState} data-bs-target="#navcol" aria-expanded="false">
                        <span className="visually-hidden" data-nsfw-filter-status="swf"></span>
                        <span className="navbar-toggler-icon" data-nsfw-filter-status="swf"></span>
                    </button>
                </a>
                {ismobile == 1 ?
                <div className= {"navbar-collapse collapse "} id="navcol"  style={{position:"relative"}}>  
                <a className="navbar-brand" data-nsfw-filter-status="swf"></a>
                        <div className="btn-group navbar-nav me-auto mx-auto" role="group">
                           <a className="navbar-brand" data-nsfw-filter-status="swf"></a>
                           <a className="btn btn-success text-uppercase nav-item" href={buyAddress} role="button" data-nsfw-filter-status="swf">Buy $HAVEN</a>
                           <button onClick = {handleSignOutClick} className="btn btn-outline-danger text-uppercase nav-item" type="button">SIGN OUT</button>
                        </div>
                    </div> 
                : 
                <div className= {"navbar-collapse collapse show"} id="navcol"  style={{position:"relative"}}>  
                <a className="navbar-brand" data-nsfw-filter-status="swf"></a>
                        <div className="btn-group navbar-nav me-auto mx-auto" role="group">
                           <a className="navbar-brand" data-nsfw-filter-status="swf"></a>
                           <a className="btn btn-success text-uppercase nav-item" href={buyAddress} role="button" data-nsfw-filter-status="swf">Buy $HAVEN</a>
                           <button onClick = {handleSignOutClick} className="btn btn-outline-danger text-uppercase nav-item" type="button">SIGN OUT</button>
                        </div>
                    </div>
               }
                </div>

        </div>
      </StyledNav>
    
    )
}




export default Head
