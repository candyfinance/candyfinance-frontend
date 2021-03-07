import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<StyledLink
				target="_blank"
				href="https://bscscan.com/address/0x0885198BbC7D33c20CfF807C0701F3A74d6858b5"
			>
				CNDY Contract
			</StyledLink>
			<StyledLink
				target="_blank"
				href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x0885198BbC7D33c20CfF807C0701F3A74d6858b5&outputCurrency=WBNB"
			>
				PancakeSwap CNDY-WBNB
			</StyledLink>
			<StyledLink target="_blank" href="https://github.com/candyfinance/candyfinance-contracts/blob/main/audit/audit.pdf">
				Audit
			</StyledLink>
			<StyledLink target="_blank" href="https://snapshot.page/#/candyfinance.eth">
				Vote
			</StyledLink>
			<StyledLink target="_blank" href="https://docs.cndy.finance">
				Docs
			</StyledLink>
			<StyledLink target="_blank" href="https://t.me/candyfinance">
				Telegram
			</StyledLink>
			<StyledLink target="_blank" href="https://discord.gg/KWxQUUYsQ8">
				Discord
			</StyledLink>
			<StyledLink target="_blank" href="https://twitter.com/candyfinance">
				Twitter
			</StyledLink>
			<StyledLink target="_blank" href="https://candyfinance.medium.com">
				Medium
			</StyledLink>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
`

const StyledLink = styled.a`
	color: ${(props) => props.theme.color.grey[400]};
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
`

export default Nav
