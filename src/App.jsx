
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import Pagination from './components/Pagination'
import getArraySplit from './utils/getArraySplit'

function App() {
  const getRandom = getRandomNumber(126)
  const [ubicationNumber, setUbicationNumber] = useState(getRandom)
  const url = `https://rickandmortyapi.com/api/location/${ubicationNumber}`
  const [location, getLocation, hasError] = useFetch(url)
  const [residents, setResidents] = useState()
  const [counter, setCounter] = useState(0)
  const [counterPages, setcounterPages] = useState(1)
  
  useEffect(()=>{
    
    getLocation()
  },[ubicationNumber])

  useEffect(()=>{
    if(location){
      const arraySplit = getArraySplit(location.residents,8)
        setResidents(arraySplit)
    }
  },[location])
  

  const inputSearch = useRef()
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    inputSearch.current.value && inputSearch.current.value !== "0" ? setUbicationNumber(inputSearch.current.value.trim()) : setUbicationNumber("invalid value")
    inputSearch.current.value = ""
    setcounterPages(1)
    setCounter(0)
  }

  
  return (
    <div className='container'>
      <header className='container__header'>
      </header>
      <div className='container__main'>
        <form className='container__form' onSubmit={handleSubmit}>
            <input className='container__input' type="text"ref={inputSearch} placeholder='Number between 1 and 126'/>
            <button className='container__btn'>Search</button>
        </form>
        {
          hasError
            ? <h2 className='message__error'>❌ Hey! you must provide an id from 1 to 126 😭</h2>
            :(
              <>
                <LocationInfo
                  location = {location}
                /> 
                {
                  residents?.[0]
                  ?(
                    <>
                      <h2 className='title__inhabitants'>Inhabitants</h2>
                      {
                        residents?.[1]
                        ?(
                        <Pagination
                          setCounter={setCounter}
                          counter={counter}
                          residents={residents}
                          setcounterPages={setcounterPages}
                          counterPages={counterPages}
                        /> 
                        )
                        :(null)
                      } 
                    </>
                  )
                  : <h2 className='title__inhabitants'>Without inhabitants</h2>
                }
                
                
                <div className='resident__container'>
                  {
                    residents?.[counter]?.map(url => (
                      <ResidentCard
                        key = {url}
                        url = {url}
                      />
                    ))
                  }
                </div>
                {
                  residents?.[1]
                  ?(
                  <Pagination
                    setCounter={setCounter}
                    counter={counter}
                    residents={residents}
                    setcounterPages={setcounterPages}
                    counterPages={counterPages}
                  /> 
                  )
                  :(null)
                } 
              </>
            )
        }
      </div>
    </div>
  )
}

export default App
