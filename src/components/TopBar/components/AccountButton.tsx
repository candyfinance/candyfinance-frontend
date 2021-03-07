import React, { useCallback } from 'react'
import styled from 'styled-components'
//import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useModal from '../../../hooks/useModal'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
	const [onPresentAccountModal] = useModal(<AccountModal />)
	const [onPresentWalletProviderModal] = useModal(
		<WalletProviderModal />,
		'provider',
	)

	const { account } = useWallet()

	const handleUnlockClick = useCallback(() => {
		onPresentWalletProviderModal()
	}, [onPresentWalletProviderModal])

	return (
		<StyledAccountButton>
			{!account ? (
				<Button variant="red" onClick={handleUnlockClick} size="sm" text="Unlock Wallet" />
			) : (
				<Button variant="red" onClick={onPresentAccountModal} size="sm" text="My Wallet" />
			)}
		</StyledAccountButton>
	)
}

const StyledAccountButton = styled.div``

export default AccountButton
