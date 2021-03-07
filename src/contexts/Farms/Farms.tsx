import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from '@binance-chain/bsc-use-wallet'
import useCandy from '../../hooks/useCandy'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../candy/utils'
import { getFarms } from '../../candy/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
	const [unharvested, setUnharvested] = useState(0)

	const candy = useCandy()
	const { account } = useWallet()

	const farms = getFarms(candy)

	return (
		<Context.Provider
			value={{
				farms,
				unharvested,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Farms
