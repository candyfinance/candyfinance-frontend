import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { supportedPools } from './lib/constants'

BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
	STAKING: {
		DEFAULT: 200000,
		SNX: 850000,
	},
}

export const getMasterChefAddress = (candy) => {
	return candy && candy.MasterChefAddress
}

export const getWethPriceAddress = (candy) => {
	return candy && candy.WethPriceAddress
}

export const getCandyPriceAddress = (candy) => {
	return candy && candy.CandyPriceAddress
}

export const getCandyAddress = (candy) => {
	return candy && candy.CandyAddress
}


export const getWethContract = (candy) => {
	return candy && candy.contracts && candy.contracts.weth
}


export const getWethPriceContract = (candy) => {
	return candy && candy.contracts && candy.contracts.wethPrice
}

export const getCandyPriceContract = (candy) => {
	return candy && candy.contracts && candy.contracts.candyPrice
}

export const getMasterChefContract = (candy) => {
	return candy && candy.contracts && candy.contracts.masterChef
}
export const getCandyContract = (candy) => {
	return candy && candy.contracts && candy.contracts.candy
}

export const getFarms = (candy) => {
	return candy
		? candy.contracts.pools.map(
				({
					pid,
					name,
					symbol,
					icon,
					tokenAddress,
					tokenDecimals,
					tokenSymbol,
					chainType,
					tokenContract,
					lpAddress,
					lpContract,
					poolType,
					allocPoint
				}) => ({
					pid,
					id: symbol,
					name,
					lpToken: symbol,
					lpTokenAddress: lpAddress,
					lpContract,
					tokenAddress,
					tokenDecimals,
					tokenSymbol,
					chainType,
					tokenContract,
					earnToken: 'CNDY',
					earnTokenAddress: candy.contracts.candy.options.address,
					icon,
					poolType,
					allocPoint
				}),
		  )
		: []
}

export const getPoolWeight = async (masterChefContract, pid) => {
	const [{ allocPoint }, totalAllocPoint] = await Promise.all([
		masterChefContract.methods.poolInfo(pid).call(),
		masterChefContract.methods.totalAllocPoint().call(),
	])

	return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
	return masterChefContract.methods.pendingReward(pid, account).call()
}

export const getLockedEarned = async (candyContract, account) => {
	return candyContract.methods.lockOf(account).call()
}

export const getTotalLPWethValue = async (
	masterChefContract,
	wethContract,
	lpContract,
	tokenContract,
	tokenDecimals,
	pid,
) => {
	const [
		tokenAmountWholeLP,
		balance,
		totalSupply,
		lpContractWeth,
		poolWeight,
	] = await Promise.all([
		tokenContract.methods.balanceOf(lpContract.options.address).call(),
		lpContract.methods.balanceOf(masterChefContract.options.address).call(),
		lpContract.methods.totalSupply().call(),
		wethContract.methods.balanceOf(lpContract.options.address).call(),
		getPoolWeight(masterChefContract, pid),
	]) ////0xa527a61703d82139f8a06bc30097cc9caa2df5a6

	// Return p1 * w1 * 2
	const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
	const lpWethWorth = new BigNumber(lpContractWeth)
	const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
	// Calculate
	const tokenAmount = new BigNumber(tokenAmountWholeLP)
		.times(portionLp)
		.div(new BigNumber(10).pow(tokenDecimals))

	const wethAmount = new BigNumber(lpContractWeth)
		.times(portionLp)
		.div(new BigNumber(10).pow(18))
	return {
		tokenAmount,
		wethAmount,
		totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
		tokenPriceInWeth: wethAmount.div(tokenAmount),
		poolWeight: poolWeight,
	}
}

export const approve = async (lpContract, masterChefContract, account) => {
	return lpContract.methods
		.approve(masterChefContract.options.address, ethers.constants.MaxUint256)
		.send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account) => {
	return masterChefContract.methods
		.deposit(pid, ethers.utils.parseUnits(amount, 18))
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const unstake = async (
	masterChefContract,
	pid,
	amount,
	account
) => {
	return masterChefContract.methods
		.withdraw(pid, ethers.utils.parseUnits(amount, 18))
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}
export const harvest = async (masterChefContract, pid, account) => {
	return masterChefContract.methods
		.claimReward(pid)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const getStaked = async (masterChefContract, pid, account) => {
	try {
		const { amount } = await masterChefContract.methods
			.userInfo(pid, account)
			.call()
		return new BigNumber(amount)
	} catch {
		return new BigNumber(0)
	}
}

export const getWethPrice = async (candy) => {
	console.log(candy)
	const amount = await candy.contracts.wethPrice.methods.latestAnswer().call()
	return new BigNumber(amount)
}

export const getCandyPrice = async (candy) => {
	const addr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
	const amount = await candy.contracts.candyPrice.methods
		.consult(addr.toString(), 1)
		.call()
	return new BigNumber(amount)
}

export const getCandySupply = async (candy) => {
	return new BigNumber(await candy.contracts.candy.methods.totalSupply().call())
}



export const redeem = async (masterChefContract, account) => {
	let now = new Date().getTime() / 10
	if (now >= 1597172400) {
		return masterChefContract.methods
			.exit()
			.send({ from: account })
			.on('transactionHash', (tx) => {
				console.log(tx)
				return tx.transactionHash
			})
	} else {
		alert('pool not active')
	}
}
