import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import candyLogo from '../../assets/img/candy-logo.png'

const Logo: React.FC = () => {
	return (
		<StyledLogo to="/">
			<img src={candyLogo} height="64" style={{ marginTop: -4 }} />
			<StyledText>
				<MasterChefText>Candy Finance</MasterChefText>
			</StyledText>
		</StyledLogo>
	)
}

const StyledLogo = styled(Link)`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 0;
	min-height: 44px;
	min-width: 44px;
	padding: 0;
	text-decoration: none;
`

const StyledText = styled.span`
	color: #CE2B49;
	font-family: 'Open Sans', sans-serif;
	font-size: 28px;
	font-weight: 600;
	letter-spacing: 0.03em;
	@media (max-width: 400px) {
		display: none;
	}
`

const MasterChefText = styled.span`
	font-family: 'Pacifico', cursive;
`

export default Logo



