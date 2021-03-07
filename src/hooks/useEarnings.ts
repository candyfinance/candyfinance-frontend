import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { getEarned, getMasterChefContract } from '../candy/utils'
import useCandy from './useCandy'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const candy = useCandy()
  const masterChefContract = getMasterChefContract(candy)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, candy])

  useEffect(() => {
    if (account && masterChefContract && candy) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, candy])

  return balance
}

export default useEarnings
