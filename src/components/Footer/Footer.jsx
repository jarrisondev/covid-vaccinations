import { Anchor } from '../Anchor/Anchor'
import { FooterStyled } from './styles'

export const Footer = () => {
	return (
		<FooterStyled>
			<Anchor
				text='Jarrison Cano'
				altText='Desarrollado por: '
				link='https://github.com/jarrisoncano'
			/>
			<Anchor
				text='Ver código fuente'
				altText=''
				link='https://github.com/jarrisoncano/covid-vaccinations'
			/>
		</FooterStyled>
	)
}
