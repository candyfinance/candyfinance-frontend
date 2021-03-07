import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import type { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, {
	StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useCandy from '../../../hooks/useCandy'
import { getEarned, getMasterChefContract } from '../../../candy/utils'
import { bnToDec } from '../../../utils'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tab-styles.css';
import { PoolType } from '../../../contexts/Farms/types'
import SearchInput from '../../../components/SearchInput'

interface FarmWithStakedValue extends Farm, StakedValue {
	apy: BigNumber
}

const cardsPerRow = 3;

const FarmCards: React.FC = () => {


	const [farms] = useFarms()
	const { account } = useWallet()
	const stakedValue = useAllStakedValue()

	const candyIndex = farms.findIndex(({ tokenSymbol }) => tokenSymbol === 'CNDY')

	const candyPrice =
		candyIndex >= 0 && stakedValue[candyIndex]
			? stakedValue[candyIndex].tokenPriceInWeth
			: new BigNumber(0)

	const BLOCKS_PER_YEAR = new BigNumber(2336000)
	const CNDY_BER_BLOCK = new BigNumber(512000)

	const searchUpdated = ((event: any) => {
		setSearchTerm(event.target.value)
	})
	const [searchTerm, setSearchTerm] = useState('')

	const { ethereum }: { ethereum: any } = useWallet()
	const chainId = Number(ethereum.chainId)
	const chainType = (chainId == 97 ||chainId == 56) ? 'binance' : 'ethereum';

	const rows = farms.reduce<FarmWithStakedValue[][]>(
		(farmRows, farm, i) => {
			var addRow = (searchTerm === "");
			var addChain = false;
			const newFarmRows = [...farmRows]

			if (searchTerm !== "" && farm.tokenSymbol.toLowerCase().includes(searchTerm.toLowerCase())) {
				addRow = true;
			}

			if (chainType == farm.chainType) {
				addChain = true;
			}

			if (addRow && addChain) {
				const farmWithStakedValue = {
					...farm,
					...stakedValue[i],
					apy: stakedValue[i]
						? candyPrice
								.times(CNDY_BER_BLOCK)
								.times(BLOCKS_PER_YEAR)
								.times(stakedValue[i].poolWeight)
								.div(stakedValue[i].totalWethValue)
						: null,
				}

				if (newFarmRows[newFarmRows.length - 1].length === 3) {
					newFarmRows.push([farmWithStakedValue])
				} else {
					newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
				}
			}
			return newFarmRows
		},
		[[]],
	)

	return (
		<div>
		<SearchInput
			value={searchTerm}
			onChange={searchUpdated}
			placeholder="Search here with the primary token tracker to find some candies for candivores!"
		/>
		<StyledCards>
			{rows[0].length ? (
				rows.map((farmRow, i) => (
					<StyledRow key={i}>
						{farmRow.map((farm, j) => (
							<React.Fragment key={j}>
								<FarmCard farm={farm} />
								{(j === 0 || j === 1) && <StyledSpacer />}
							</React.Fragment>
						))}
					</StyledRow>
				))
			) : (
				<StyledLoadingWrapper>
					<Loader text="Loading ..." />
				</StyledLoadingWrapper>
			)}
		</StyledCards>
		</div>
	)
}

interface FarmCardProps {
	farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
	const [startTime, setStartTime] = useState(0)
	const [harvestable, setHarvestable] = useState(0)

	const { account } = useWallet()
	const { lpTokenAddress } = farm
	const candy = useCandy()

	const renderer = (countdownProps: CountdownRenderProps) => {
		const { hours, minutes, seconds } = countdownProps
		const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
		const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
		const paddedHours = hours < 10 ? `0${hours}` : hours
		return (
			<span style={{ width: '100%' }}>
				{paddedHours}:{paddedMinutes}:{paddedSeconds}
			</span>
		)
	}

	useEffect(() => {
		async function fetchEarned() {
			if (candy) return
			const earned = await getEarned(
				getMasterChefContract(candy),
				lpTokenAddress,
				account,
			)
			setHarvestable(bnToDec(earned))
		}
		if (candy && account) {
			fetchEarned()
		}

	}, [candy, lpTokenAddress, account, setHarvestable])

	const poolActive = true // startTime * 1000 - Date.now() <= 0
	const tokenBuy = 'Buy ' + farm.tokenSymbol
	const destination ="https://exchange.pancakeswap.finance/#/swap?inputCurrency=" + farm.tokenAddress;
	return (
		<StyledCardWrapper>
			{farm.tokenSymbol === 'CNDY' && farm.poolType === 'uni' && <StyledCardAccent />}
			<Card>
				<CardContent>
					<StyledContent>
						<CardIcon>
							<img src={farm.icon} alt="" height="50" />
						</CardIcon>
						<StyledTitle>{farm.name}</StyledTitle>
						<StyledDetails>
							<StyledDetail>Deposit {farm.lpToken.toUpperCase()}</StyledDetail>
							<StyledDetail>Earn {farm.allocPoint !== 10 ? `${farm.allocPoint/10}x ` : ''}{farm.earnToken.toUpperCase()}</StyledDetail>
						</StyledDetails>
						<Spacer/>
						<Button
							disabled={!poolActive}
							variant="blue"
							text={poolActive ? 'Select' : undefined}
							to={`/farms/${farm.id}`}
						>
							{!poolActive && (
								<Countdown
									date={new Date(startTime * 1000)}
									renderer={renderer}
								/>
							)}
						</Button>
						<Spacer />
						<Button variant="blue" text={tokenBuy} href={destination}></Button>
						<StyledInsight>
							<span>APY</span>
							<span>
								{farm.apy
									? `${farm.apy
											.times(new BigNumber(100))
											.toNumber()
											.toLocaleString('en-US')
											.slice(0, -1)}%`
									: 'Loading ...'}
							</span>
						</StyledInsight>
					</StyledContent>
				</CardContent>
			</Card>
		</StyledCardWrapper>
	)
}

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
	background: linear-gradient(
		45deg,
		rgba(255, 0, 0, 1) 0%,
		rgba(255, 154, 0, 1) 10%,
		rgba(208, 222, 33, 1) 20%,
		rgba(79, 220, 74, 1) 30%,
		rgba(63, 218, 216, 1) 40%,
		rgba(47, 201, 226, 1) 50%,
		rgba(28, 127, 238, 1) 60%,
		rgba(95, 21, 242, 1) 70%,
		rgba(186, 12, 248, 1) 80%,
		rgba(251, 7, 217, 1) 90%,
		rgba(255, 0, 0, 1) 100%
	);
	background-size: 300% 300%;
	animation: ${RainbowLight} 2s linear infinite;
	border-radius: 12px;
	filter: blur(6px);
	position: absolute;
	top: -2px;
	right: -2px;
	bottom: -2px;
	left: -2px;
	z-index: -1;
`

const StyledCards = styled.div`
	width: 900px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	@media (max-width: 768px) {
		width: 100%;
		flex-flow: column nowrap;
		align-items: center;
	}
`

const StyledRow = styled.div`
	display: flex;
	margin-bottom: ${(props) => props.theme.spacing[4]}px;
	flex-flow: row wrap;
	@media (max-width: 768px) {
		width: 100%;
		flex-flow: column nowrap;
		align-items: center;
	}
`

const StyledLoadingWrapper = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	justify-content: center;
`

const StyledCardWrapper = styled.div`
	display: flex;
	margin-top: ${(props) => props.theme.spacing[4]}px;
	width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
	position: relative;
`

const StyledTitle = styled.h4`
	color: ${(props) => props.theme.color.grey[600]};
	font-size: 19px;
	font-weight: 700;
	margin: ${(props) => props.theme.spacing[2]}px 0 0;
	padding: 0;
`

const StyledContent = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const StyledSpacer = styled.div`
	height: ${(props) => props.theme.spacing[4]}px;
	width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
	margin-top: ${(props) => props.theme.spacing[2]}px;
	text-align: center;
`

const StyledDetail = styled.div`
	color: ${(props) => props.theme.color.grey[500]};
`

const StyledInsight = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	border-radius: 8px;
	background: #fffdfa;
	color: #aa9584;
	width: 100%;
	margin-top: 12px;
	line-height: 32px;
	font-size: 13px;
	border: 1px solid #e6dcd5;
	text-align: center;
	padding: 0 12px;
`


export default FarmCards
