import { useCallback, useEffect, useState } from 'react'

import { BigNumber } from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { getStaked, getMasterChefContract } from '../candy/utils'
import useCandy from './useCandy'
import useBlock from './useBlock'
import { ethers } from 'ethers'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const candy = useCandy()
  const masterChefContract = getMasterChefContract(candy)
  const block = useBlock()
  let userBalance

  const fetchBalance = useCallback(async () => {
    BigNumber.config({ DECIMAL_PLACES: 18 })
    const balance = await getStaked(masterChefContract, pid, account)
    userBalance = new BigNumber(balance)
    setBalance(userBalance.decimalPlaces(18))
  }, [account, pid, candy])

  useEffect(() => {
    if (account && candy) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, candy])

  return balance.decimalPlaces(18)
}

export default useStakedBalance
