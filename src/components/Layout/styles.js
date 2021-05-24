import styled from 'styled-components'

export const LayoutStyled = styled.div`
	align-items: center;
	flex-direction: column;
	color: white;
	display: flex;

	justify-content: space-between;
	margin: 0 auto;
	max-width: 1200px;
	min-height: 100vh;

	h1 {
		font-size: 4rem;
		margin: 0;
		text-align: center;
		span {
			color: #c3c1d9;
		}

		@media (max-width: 850px) {
			font-size: 3.8rem;
			text-align: center;
		}
	}

	.date {
		background-color: #05caa7;
		border: 2px solid #008c6f;
		border-radius: 2rem;
		box-shadow: 0rem 0rem 0.7rem black;

		font-size: 1.3rem;
		margin-top: 1rem;
		padding: 0.3rem 2rem;
	}
`
