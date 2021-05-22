import { AnchorStyled } from './styles'
export const Anchor = ({ text, altText, link, color }) => {
	return (
		<AnchorStyled color={color}>
			{altText}
			<a href={link} target='_blank' rel='noopener noreferrer'>
				{text}
			</a>
		</AnchorStyled>
	)
}
