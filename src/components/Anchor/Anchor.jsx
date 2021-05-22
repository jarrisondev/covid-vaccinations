export const Anchor = ({ text, altText, link }) => {
	return (
		<p>
			{altText}
			<a href={link} target='_blank' rel='noopener noreferrer'>
				{text}
			</a>
		</p>
	)
}
