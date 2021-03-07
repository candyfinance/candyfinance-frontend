import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import useCandy from '../../hooks/useCandy'
import { getMasterChefContract } from '../../candy/utils'
import { getContract } from '../../utils/erc20'
import Harvest from './components/Harvest'
import {PoolType} from '../../contexts/Farms/types';
import Stake from './components/Stake'

const Farm: React.FC = () => {
	const { farmId } = useParams()
	const {
		pid,
		lpToken,
		lpTokenAddress,
		tokenAddress,
		earnToken,
		name,
		icon,
		poolType,
		allocPoint
	} = useFarm(farmId) || {
		pid: 0,
		lpToken: '',
		lpTokenAddress: '',
		tokenAddress: '',
		earnToken: '',
		name: '',
		icon: '',
		poolType: PoolType.UNI,
		allocPoint: 0
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const candy = useCandy()
	const { ethereum } = useWallet()

	const lpContract = useMemo(() => {
		return getContract(ethereum as provider, lpTokenAddress)
	}, [ethereum, lpTokenAddress])

	const { onRedeem } = useRedeem(getMasterChefContract(candy))

	const lpTokenName = useMemo(() => {
		return lpToken.toUpperCase()
	}, [lpToken])

	const earnTokenName = useMemo(() => {
		return earnToken.toUpperCase()
	}, [earnToken])

	return (
		<>
			<PageHeader
				icon={icon}
				subtitle={`Deposit ${lpTokenName} Tokens and earn CNDY`}
				title={name}
			/>
			<StyledFarm>
				<StyledCardsWrapper>
					<StyledCardWrapper>
						<Harvest pid={pid} />
					</StyledCardWrapper>
					<Spacer />
					<StyledCardWrapper>
						<Stake
							lpContract={lpContract}
							pid={pid}
							tokenName={lpToken.toUpperCase()}
							poolType={poolType}
							icon={icon}
						/>
					</StyledCardWrapper>
				</StyledCardsWrapper>
				<Spacer size="lg" />
				<StyledInfo>
					🍭 Every time you stake and unstake LP tokens, you earn CNDY rewards! 🍭
				</StyledInfo>
				<Spacer size="lg" />
			</StyledFarm>
		</>
	)
}

const StyledFarm = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const StyledCardsWrapper = styled.div`
	display: flex;
	width: 600px;
	@media (max-width: 768px) {
		width: 100%;
		flex-flow: column nowrap;
		align-items: center;
	}
`

const StyledCardWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 80%;
	}
`

const StyledInfo = styled.h3`
	color: ${(props) => props.theme.color.grey[400]};
	font-size: 16px;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: center;
`

export default Farm
