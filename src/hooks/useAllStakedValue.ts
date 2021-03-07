import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../candy/utils'
import useCandy from './useCandy'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const candy = useCandy()
  const farms = getFarms(candy)
  const masterChefContract = getMasterChefContract(candy)
  const wethContract = getWethContract(candy)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          tokenDecimals,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          tokenDecimals: number
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContract,
            lpContract,
            tokenContract,
            tokenDecimals,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, candy])

  useEffect(() => {
    if (account && masterChefContract && candy) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, candy])

  return balances
}

export default useAllStakedValue
