import styled from 'styled-components'

export const AnchorStyled = styled.p`
	font-size: 1.3rem;

	a {
		color: ${(props) => (props.color ? '#05caa7' : 'white')};
	}

	@media (max-width: 700px) {
		font-size: 1.2rem;
	}
`
