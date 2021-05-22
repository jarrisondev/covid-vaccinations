import styled from 'styled-components'

export const AnchorStyled = styled.p`
	font-size: 1.3rem;
	margin-top: 2rem;

	a {
		color: ${(props) => (props.color ? '#05caa7' : 'white')};
	}
`