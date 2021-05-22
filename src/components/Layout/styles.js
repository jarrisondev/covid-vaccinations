import styled from 'styled-components'

export const LayoutStyled = styled.div`
	align-items: center;
	flex-direction: column;
	color: white;
	display: flex;

	margin: 0 auto;
	max-width: 1200px;
	min-height: 100vh;

	h1 {
		font-size: 4rem;
		margin: 0;

		span {
			color: #c3c1d9;
		}
	}

	.date {
		background-color: #05caa7;
		border: 2px solid #008c6f;
		border-radius: 2rem;
		font-size: 1.3rem;

		margin-top: 1rem;
		padding: 0.3rem 2rem;
	}
`
