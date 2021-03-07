import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import candyBanner from '../../assets/img/candy-banner.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
	const { path } = useRouteMatch()
	const { account } = useWallet()
	const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
	return (
		<Switch>
			<Page>
				{account ? (
					<>
						<Route exact path={path}>
							<PageHeader
								icon={candyBanner}
								subtitle="Earn CNDY tokens by staking PancakeSwap Cake-LP Tokens. The world of Candy Finance is immense. The choices at any given moment on the planet, how can a mere mortal experience it all? Well, having it all is overrated. This is a list based on CandyPunk's essentials that every candy lover should experience at least once."
								title="Select Your Favorite Candy!"
							/>
							<FarmCards />
						</Route>
						<Route path={`${path}/:farmId`}>
							<Farm />
						</Route>
					</>
				) : (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Button
							onClick={onPresentWalletProviderModal}
							variant="red"
							text="🔓 Unlock Wallet"
						/>
					</div>
				)}
			</Page>
		</Switch>
	)
}

export default Farms
