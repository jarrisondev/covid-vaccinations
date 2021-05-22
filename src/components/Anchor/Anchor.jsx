import { AnchorStyled } from './styles'
export const Anchor = ({ text, altText, link, color }) => {
	return (
		<AnchorStyled color={color}>
			{altText.toUpperCase()}
			<a href={link} target='_blank' rel='noopener noreferrer'>
				{text.toUpperCase()}
			</a>
		</AnchorStyled>
	)
}
