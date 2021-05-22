import { Targ } from './components/Targ/Targ'
import { Layout } from './components/Layout/Layout'
import { useEffect, useState } from 'react'
export default function App() {
	const initialData = {
		date: '',
		people_vaccinated: null,
		total_vaccinations: null,
		people_fully_vaccinated: null,
		daily_vaccinations: null,
		people_fully_vaccinated_per_hundred: null,
	}
	const [data, setData] = useState(initialData)

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
		)
			.then((data) => data.json())
			.then((res) => {
				let lastData = res[40].data.length - 1
				setData(res[40].data[lastData])
			})
	}, [])

	return (
		<>
			<Layout>
				<h1>Vacunación COVID-19 en Colombia</h1>
				<p>{data.date}</p>
				<div className=''>
					<Targ />
					<Targ />
					<Targ />
					<Targ />
				</div>
			</Layout>
		</>
	)
}
