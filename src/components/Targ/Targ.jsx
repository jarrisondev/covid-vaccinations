import { TargStyled } from './styles'

export const Targ = ({ title, data, porcent, center }) => {
	const formatNumber = (number) => {
		number = String(number).replace(/\D/g, '')
		return number === '' ? number : Number(number).toLocaleString()
	}

	return (
		<>
			<TargStyled center={center}>
				<h2>{title.toUpperCase()}:</h2>
				<p>{porcent ? `${data}%` : formatNumber(data)}</p>
			</TargStyled>
		</>
	)
}
