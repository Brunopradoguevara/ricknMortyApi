import './styles/Pagination.css'
const Pagination = ({setCounter,counter,residents,setcounterPages,counterPages}) => {

    const handlePrevius = ()=>{
        if(residents[counter - 1]){
            setCounter(counter - 1)
            setcounterPages(counterPages - 1)
        }
    }
    const handleNext = ()=>{
        if(residents[counter + 1]){
            setCounter(counter + 1) 
            setcounterPages(counterPages + 1)
        }
    }

  return (
    <nav className="pagination__nav">
        <ul className="pagination__list">
            <li className="pagination__item">
                <button onClick={handlePrevius} className="pagination__btn">Previous</button>
            </li>  
           {residents.map((resident, index) => (
                <li key={index} className="pagination__item">
                    <button onClick={() => setCounter(index)} className={`pagination__btn ${index === counter ?'active' : ''}`} >

                      {index + 1}

                    </button>
                </li>
            ))
           }
            <li className="pagination__item">
                <button onClick={handleNext} className="pagination__btn">Next</button>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination