import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledArea = styled.div`
  width: 100%;
  background-color: #f9fcff;
  background-image: linear-gradient(147deg,#f9fcff 0,#dee4ea 74%);
  border-bottom: 2px solid var(--clr-primary);
  box-shadow: rgb(0 0 0 / 15%) 0 3px 3px 0;
  flex: 1 1 auto;
  padding: 1rem 1rem;

`

const StyledIconArea = styled.div`
  padding: 0.25rem !important;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`

const StyledInfoArea = styled.div`
  text-align: center;
  padding: 0.5rem !important;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`

const StyledIcon = styled.div`
  border-right: 2px solid #81cd2c;
  text-align: center;
  position: relative;
  margin-top: 0px;
  @media (max-width: 767px) {
    left: 0px;
  }
`
const StyledItem = styled.div`
  background: transparent!important;
  border: none;

`
const getAccountAddress = (address:any) => {
    var address1 = address.substring(0, 8) +
      '...' +
      address.substr(address.length - 8)
    return address1
}

interface ReadContractItemProps {
  address: any
  balance: any
}


const ReadContractItem: React.FC<ReadContractItemProps> = ({
  address,
  balance,
}) => {
  return (
      <div className="row d-flex flex-wrap justify-content-evenly align-items-center flex-row mb-5 mt-20">
          <div className="col col-6 m-0 p-0">
                  <StyledItem className="card m-0 p-0">
                      <div className="card-body text-end dapp-card ">
                          <h5 className="card-title" style={{whiteSpace: "nowrap", overflow:"hidden"}}>{getAccountAddress(address)}</h5>
                          <h6 className="text-muted card-subtitle mb-2">your address</h6>
                      </div>
                  </StyledItem>
              </div>
              <div className="col col-6 m-0 p-0">
                  <StyledItem className="card" >
                      <div className="card-body dapp-card dapp-reverse-bg">
                          <h5 className="card-title" style={{whiteSpace: "nowrap", overflow:"hidden"}}>$HAVEN {balance}({balance*0.000000251}$)</h5>
                          <h6 className="text-muted card-subtitle mb-2">your balance</h6>
                      </div>
                  </StyledItem>
              </div>
      </div>
    // <StyledArea>
    //   <StyledIconArea>
    //     <StyledIcon>
    //       <img style={{ height: 80, borderRadius: 25 }} src={icon} />
    //     </StyledIcon>
    //   </StyledIconArea>
    //   <StyledInfoArea>
    //     <StyledInfo>{title}</StyledInfo>
    //     <StyledInfo>{description}</StyledInfo>
    //   </StyledInfoArea>
    // </StyledArea>
  )
}

export default ReadContractItem
