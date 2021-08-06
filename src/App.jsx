import { Targscontainer } from './components/Targscontainer/TargsContainer'
import { LayoutStyled } from './styles/layout'
import { useEffect, useState } from 'react'
import { Anchor } from './components/Anchor/Anchor'
import SkelentonElement from './components/Skeletons/SkelentonElement'

export default function App() {
  const initialData = {
    date: '',
    people_vaccinated: '',
    total_vaccinations: '',
    people_fully_vaccinated: '',
    daily_vaccinations: '',
    people_fully_vaccinated_per_hundred: ''
  }
  const [data, setData] = useState(initialData)
  const [theme, setTheme] = useState(true)

  useEffect(async () => {
    await fetch(
      'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
    )
      .then((data) => data.json())
      .then((res) => {
        const [country] = res.filter(
          (country) => country.country === 'Colombia'
        )
        let lastData = country.data.length - 1
        setData(country.data[lastData])
      })
  }, [])

  return (
    <>
      <LayoutStyled t={theme}>
        <div className="container">
          <h1>
            Vacunación <span>COVID-19</span> en Colombia
          </h1>
          <p className='date'>
            {data.date && data.date}
            {!data.date && (
              <SkelentonElement
                width={100}
                height={30}
                type='Date'
                bgC='#05caa7'
                frC='#32e6c5'
              />
            )}
            <svg
              className='iconTheme'
              onClick={() => setTheme((t) => !t)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'></path>
            </svg>
          </p>
          <Targscontainer data={data} />
          <Anchor
            text='¿Tienes priorización?'
            link='https://mivacuna.sispro.gov.co/MiVacuna/Account/Login'
            color='true'
          />
          <Anchor
            altText='Datos de: '
            text='Our World Data'
            link='https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations'
            color='true'
          />
        </div>
      </LayoutStyled>
    </>
  )
}
