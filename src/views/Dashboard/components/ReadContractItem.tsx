import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledArea = styled.div`
  box-sizing: border-box;
  margin: 0px;
  width: 50%;
  position: relative;
  border: 1px solid #81cd2c;
  border-radius: 20px;
  font-family: 'Nunito';
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  padding: 20px 0px;
  color: black;
  font-family: 'Nunito';
  vertical-align: middle;
  @media (max-width: 767px) {
    margin-top: 30px;
    padding: 48px 20px;
  }
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 20px;
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
    <StyledArea>
      <StyledIconArea>
        <StyledIcon>
          <img style={{ width: 70, borderRadius: 25 }} src={icon} />
        </StyledIcon>
      </StyledIconArea>
      <StyledInfoArea>
        <StyledInfo>{title}</StyledInfo>
        <StyledInfo>{description}</StyledInfo>
      </StyledInfoArea>
    </StyledArea>
  )
}

export default ReadContractItem
