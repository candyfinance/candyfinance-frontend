import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import { BigNumber } from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import {
  getWethPrice,
  getCandyPrice,
  getWethPriceContract,
  getCandyPriceContract,
} from '../candy/utils'
import useCandy from './useCandy'
import useBlock from './useBlock'

const useSubValues = () => {
  const { account }: { account: string } = useWallet()
  const candy = useCandy()
  //const wethPriceContract = getWethPriceContract(candy)
  //const candyPriceContract = getCandyPriceContract(candy)
  const [usrSubText, setUsrSubText] = useState(new String())
  const [candyPrices, setCandyPrices] = useState(new BigNumber(0))
  const [wethPrices, setWethPrices] = useState(new BigNumber(0))

  const getInfo = useCallback(async () => {
    if (candy) {
      const wethPriceFun = getWethPrice(candy).then((response) => {
        setWethPrices(response)

        const candyPriceFun = getCandyPrice(candy).then((response) => {
          setCandyPrices(response)
          const currentRate = wethPrices
            .dividedBy(100000000)
            .dividedBy(candyPrices)
          const userValue = currentRate //.multipliedBy(  locks.dividedBy(1000000000000000000) )
          const dailyPrice = userValue.dividedBy(1095).toFormat(2)
          console.log(dailyPrice + ' dailyPrice')
          console.log(wethPrices + ' wethprice')
          console.log(candyPrices + ' candyPrice')
          const annualPrice = userValue.dividedBy(3).toFormat(2)
          console.log(annualPrice + ' annual')
          const wethText = userValue.toFormat(2)
        })
      })
    }
  }, [usrSubText])

  useEffect(() => {
    if (account && candy) {
      getInfo()
    }
  }, [account, candy, usrSubText])

  return usrSubText.toString()
}

export default useSubValues
