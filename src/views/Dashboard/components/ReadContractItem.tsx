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
const StyledInfo = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin: 10px;
`

interface ReadContractItemProps {
  icon: string
  title?: string
  description?: string
}

const ReadContractItem: React.FC<ReadContractItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="card mb-1" style={{width:"100%"}}>
        <div className="card-body dapp-card" style={{backgroundColor: "#f9fcff"}}>
            <div className="row d-flex flex-wrap justify-content-center align-items-center flex-row">
                <div className="col col-4 text-end">
                  <img className="dapp-img mx-auto" src={icon} data-nsfw-filter-status="sfw" style={{visibility:"visible"}} />
                </div>
                <div className="col col-8 text-start">
                    <h4>{title}</h4>
                    <h6 className="text-muted mb-2">{description}<br/></h6>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default ReadContractItem
