import React from 'react'
import styled from 'styled-components'
import candyBanner from '../../assets/img/candy-banner.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
	return (
		<Page>
			<PageHeader
				icon={candyBanner}
				title="Welcome to Candy Finance"
				subtitle="Stake PancakeSwap Cake-LP tokens and earn CNDY!"
			/>
			<Container>
				<Balances />
			</Container>
			<Spacer size="lg" />
			<StyledInfo>
				Make sure you read the <a target="_blank" href="https://docs.cndy.finance">docs</a> before using the pools to be familiar with risks and fees!
			</StyledInfo>
			<Spacer size="md" />
			<StyledInfo>
				You can earn lots of candies by using Candy Finance's <a href="#/farms/CNDY-WBNB%20Cake-LPP">CNDY-WBNB</a> liquidity pool that yields up-to 48 times more CNDY than others!
			</StyledInfo>
			<Spacer size="md" />
			<StyledInfo>
			   Earn 1$ worth of CNDY tokens every day, for every 1K followers you <a target="_blank" href="https://candyfinance.medium.com/candy-finance-airdrop-program-986e32c1c412">recommend $CNDY in a tweet</a>. If you have 5K followers you can earn 150$ a month!
			</StyledInfo>
			<Spacer size="md" />
			<div
				style={{
					margin: '0 auto', color:'#DB5A67'
				}}
			>
				<Button text="🍭 Go to Candies 🍭" to="/farms" variant="red" />
			</div>
			<Spacer size="md" />
		</Page>
	)
}

const StyledInfo = styled.h3`
	color: ${(props) => props.theme.color.grey[500]};
	font-size: 16px;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: center;

	> b {
		color: ${(props) => props.theme.color.grey[600]};
	}
`

export default Home
