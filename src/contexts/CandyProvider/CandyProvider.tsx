import React, { createContext, useEffect, useState } from 'react'

//import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Candy } from '../../candy'

export interface CandyContext {
	candy?: typeof Candy
}

export const Context = createContext<CandyContext>({
	candy: undefined,
})

declare global {
	interface Window {
		candysauce: any
		candy: any
	}
}

const CandyProvider: React.FC = ({ children }) => {
	const { ethereum }: { ethereum: any } = useWallet()
	const [candy, setCandy] = useState<any>()

	window.candy = candy

	useEffect(() => {
		if (ethereum) {
			const chainId = Number(ethereum.chainId)
			console.log(chainId)
			const candyLib = new Candy(ethereum, chainId, false, {
				defaultAccount: ethereum.selectedAddress,
				defaultConfirmations: 1,
				autoGasMultiplier: 1.05,
				testing: false,
				defaultGas: '300000',
				defaultGasPrice: '20000000000',
				accounts: [],
				ethereumNodeTimeout: 10000,
			})
			console.log(candyLib)
			setCandy(candyLib)
			window.candysauce = candyLib
		}
	}, [ethereum])

	return <Context.Provider value={{ candy }}>{children}</Context.Provider>
}

export default CandyProvider
