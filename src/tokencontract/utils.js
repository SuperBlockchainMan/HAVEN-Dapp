import BigNumber from 'bignumber.js'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const claimBNBReward = async (contract) => {
  await contract.tokencontract.contracts.TokenContractBep20.methods.claimBNBReward().send()
}

export const sendTokenContract = async (contract, address, amount) => { // please fix function name correctly like ui
  await contract.tokencontract.contracts.TokenContractBep20.methods.transfer(address, amount).send() // that is same change only parameters and function name
}