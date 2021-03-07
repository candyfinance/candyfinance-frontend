import React from 'react'
import candyBanner from '../../assets/img/candy-banner.png'

interface CandyIconProps {
	size?: number
	v1?: boolean
	v2?: boolean
	v3?: boolean
}

const CandyIcon: React.FC<CandyIconProps> = ({ size = 36, v1, v2, v3 }) => (
	<span
		role="img"
		style={{
			fontSize: size,
			filter: v1 ? 'saturate(0.5)' : undefined,
		}}
	>
		<img src={candyBanner} width={50} height={50} />
	</span>
)

export default CandyIcon
