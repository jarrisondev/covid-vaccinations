import styled from 'styled-components'

export const TargsContainerStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin: 2rem 0;
	width: 100%;
	gap: 1.5rem;

	.targsSubContainer {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}

	.targ-middle {
		align-items: center;
		text-align: center;
	}

	@media (max-width: 850px) {
		.targsSubContainer {
			align-items: center;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
`
