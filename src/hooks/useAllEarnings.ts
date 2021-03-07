import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../candy/utils'
import useCandy from './useCandy'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const candy = useCandy()
  const farms = getFarms(candy)
  const masterChefContract = getMasterChefContract(candy)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, candy])

  useEffect(() => {
    if (account && masterChefContract && candy) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, candy])

  return balances
}

export default useAllEarnings
