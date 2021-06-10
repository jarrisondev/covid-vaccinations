import ContentLoader from 'react-content-loader'

const SkelentonElement = ({ width = 200, height = 45, type, bgC, frC }) => (
	<ContentLoader
		speed={1}
		width={width}
		height={height}
		viewBox={`0 0 ${width} ${height}`}
		backgroundColor={bgC}
		foregroundColor={frC}
	>
		{type === 'Number' && (
			<>
				<rect x='3' y='10' rx='5' ry='5' width='30%' height='25' />
				<rect x='75' y='10' rx='5' ry='5' width='60%' height='25' />
			</>
		)}
		{type === 'Date' && (
			<rect x='3' y='0' rx='5' ry='5' width='95%' height='25' />
		)}
	</ContentLoader>
)

export default SkelentonElement
