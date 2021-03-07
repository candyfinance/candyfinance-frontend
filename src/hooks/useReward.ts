import { useCallback } from 'react'

import useCandy from './useCandy'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { harvest, getMasterChefContract } from '../candy/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const candy = useCandy()
  const masterChefContract = getMasterChefContract(candy)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, candy])

  return { onReward: handleReward }
}

export default useReward
