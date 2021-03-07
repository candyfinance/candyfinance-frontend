import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/img/search.png'

export interface SearchInputProps {
	endAdornment?: React.ReactNode
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
	placeholder?: string
	startAdornment?: React.ReactNode
	value: string
}

const SearchInput: React.FC<SearchInputProps> = ({
	endAdornment,
	onChange,
	placeholder,
	startAdornment,
	value,
}) => {
	return (
		<StyledSearchInputWrapper>
			{!!startAdornment && startAdornment}
			<img src={searchIcon} style={{ height: 24 }} />
			<StyledSearchInput
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{!!endAdornment && endAdornment}
		</StyledSearchInputWrapper>
	)
}

const StyledSearchInputWrapper = styled.div`
	align-items: center;
	background-color: ${(props) => props.theme.color.grey[200]};
	border-radius: ${(props) => props.theme.borderRadius}px;
	box-shadow: inset 4px 4px 8px ${(props) => props.theme.color.grey[300]},
		inset -6px -6px 12px ${(props) => props.theme.color.grey[100]};
	display: flex;
	height: 72px;
	padding: 0 ${(props) => props.theme.spacing[3]}px;
`

const StyledSearchInput = styled.input`
	background: none;
	border: 0;
	color: ${(props) => props.theme.color.grey[600]};
	font-size: 18px;
	flex: 1;
	height: 56px;
	margin: 0;
	padding: 0;
	padding-left: 10px;
	outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #9e96b1;
  }
  :-ms-input-placeholder {
     color: #9e96b1;
  }
`
export default SearchInput
