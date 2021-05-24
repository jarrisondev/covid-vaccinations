import styled from 'styled-components'

export const FooterStyled = styled.footer`
	background-color: #2f2d78;
	display: flex;
	justify-content: space-around;
	margin-top: 2rem;

	padding: 0.5rem 0;
	width: 100%;

	p:nth-of-type(1) {
		margin-right: 1rem;
	}

	@media (max-width: 700px) {
		padding: 0.5rem 0;
	}
`
