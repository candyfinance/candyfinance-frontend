import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';

const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<StyledLink
				exact
				activeClassName="active"
				to={{ pathname: '/' }}
			>
				Home
			</StyledLink>
			<StyledLink
				exact
				activeClassName="active"
				to={{ pathname: '/farms' }}
			>
				Candies
			</StyledLink>
			<StyledAbsoluteLink href="https://docs.cndy.finance/about" target="_blank">
				About
			</StyledAbsoluteLink>
			<StyledAbsoluteLink href="https://docs.cndy.finance/faq" target="_blank">
				FAQ
			</StyledAbsoluteLink>
			<StyledAbsoluteLink href="https://snapshot.page/#/candyfinance.eth" target="_blank">
				Vote
			</StyledAbsoluteLink>
			<ReactTooltip />
			<StyledAbsoluteLink href="https://t.me/candyfinance" target="_blank">
				Telegram
			</StyledAbsoluteLink>
			<StyledAbsoluteLink href="https://twitter.com/candyfinance" target="_blank">
				Twitter
			</StyledAbsoluteLink>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
`

const StyledLink = styled(NavLink)`
	color: ${(props) => props.theme.color.grey[400]};
	font-weight: 700;
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
	&.active {
		color: ${(props) => props.theme.color.primary.main};
	}
	@media (max-width: 400px) {
		padding-left: ${(props) => props.theme.spacing[2]}px;
		padding-right: ${(props) => props.theme.spacing[2]}px;
	}
`

const StyledAbsoluteLink = styled.a`
	color: ${(props) => props.theme.color.grey[400]};
	font-weight: 700;
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
	&.active {
		color: ${(props) => props.theme.color.primary.main};
	}
	@media (max-width: 400px) {
		padding-left: ${(props) => props.theme.spacing[2]}px;
		padding-right: ${(props) => props.theme.spacing[2]}px;
	}
`

export default Nav
