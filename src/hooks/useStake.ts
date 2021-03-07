import { useCallback } from 'react'

import useCandy from './useCandy'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { stake, getMasterChefContract } from '../candy/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const candy = useCandy()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(candy),
        pid,
        amount,
        account
      )
      console.log(txHash)
    },
    [account, pid, candy],
  )

  return { onStake: handleStake }
}

export default useStake
