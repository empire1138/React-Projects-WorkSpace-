import React, { useEffect, useState } from 'react'
import SuperHero from '../APIS/SuperHero';
// import HeroDisplay from './HeroDisplay';


function App() {

    const [nameSearch, setNameSearch] = useState('');
    // const [loading, setLoading] = useState('true');
    const [heroResults, setHeroResults] = useState([]);




    //     const fetchInfo = async () => {
    //         const {data} = SuperHero.get(`${nameSearch}`)
    //         setHeroResults(data);
    //         console.log(data);
    //         console.log(heroResults)
    //     }
    //  
    // }


    useEffect(() => {
        // setLoading(true);
        SuperHero.get(`${nameSearch}`)
            .then((res) => {
                console.log('first', res.data)
                console.log(res.data.results[0])
                setHeroResults(res.data.results[0]);
                console.log('heroResults', heroResults.id)
            })
            .catch(error => console.log(error))
    }, [nameSearch])

    console.log('heroResults2', heroResults.id)

    const handleHeroClick = () => setNameSearch(nameSearch)

    return (
        <div>
            <form className="form" >

                <label>Enter Hero for to Search</label>
                <input
                    type="text"
                    value={nameSearch}
                    // onChange={e => setNameSearch(e.target.value)}
                    className="input"
                />
                <button className="button" onClick={handleHeroClick}
                >Click to Search</button>


            </form>

            {/* <form className="form" onSubmit={e => addItem(e)}>
                <label htmlFor="newItem">Task:</label>
                <input
                    type="text"
                    className="input"
                    name="newItem"
                    id="newItem"
                    placeholder="Something that needs to be done..."
                />
                <button className="button is-info">
                    Add Item
                </button>
            </form> */}
            <div >
                {/* <div>
                    <img alt="Hero">{heroResults.image.url}</img>
                    <p>{heroResults.name}</p>
                </div>  */}

            </div>
        </div>
    )

}


export default App;