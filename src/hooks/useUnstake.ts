import { useCallback } from 'react'

import useCandy from './useCandy'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { unstake, getMasterChefContract  } from '../candy/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const candy = useCandy()
  const masterChefContract = getMasterChefContract(candy)

  const handleUnstake = useCallback(
    async (amount: string) => {

      const txHash = await unstake(
        masterChefContract,
        pid,
        amount,
        account
      )
      console.log(txHash)
    },
    [account, pid, candy],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
