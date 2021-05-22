import { TargsContainerStyled } from './styles'
import { Targ } from '../Targ/Targ'

export const Targscontainer = ({ data }) => {
	return (
		<TargsContainerStyled>
			<div className='targsSubContainer'>
				<Targ title='personas con primer dosis' data={data.people_vaccinated} />
				<Targ
					title='personas completamente vacunadas'
					data={data.people_fully_vaccinated}
				/>
			</div>
			<Targ title='total dosis administradas' data={data.total_vaccinations} />
			<div className='targsSubContainer'>
				<Targ title='vacunacciones diarias' data={data.daily_vaccinations} />
				<Targ
					title='% población vacunada'
					data={data.people_fully_vaccinated_per_hundred}
					porcent={true}
				/>
			</div>
		</TargsContainerStyled>
	)
}
