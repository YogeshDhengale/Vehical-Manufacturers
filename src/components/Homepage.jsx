import React, { useEffect, useState } from 'react'
import Singlecomponent from './Singlecomponent'
import axios from 'axios'

const Homepage = () => {
    const [render, setRender]=useState(false)
    const [single, setSingle]=useState()
    const [filter, setFilter]=useState()
    const [url, setUrl] = useState("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2")
    const [data, setData] = useState([])

    const handleFilter=(e)=>{
        const value=e.target.value
        console.log(value)
        if(!value){
            setUrl("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2")
        }
        else if(value==='car'){
            setFilter(e.target.value) 
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }
        else if(value==='truck'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Multipurpose Passenger Vehicle'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Motorcycle'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Trailer'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Low Speed Vehicle'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Off Road Vehicle'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Bus'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else if(value==='Incomplete Vehicle'){
            setFilter(value)
            setUrl(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${value}?format=json`)
        }else{
            setUrl("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2")
        }
    }
    
    const handleSingleClick=(id)=>{
        setRender(true)
        setSingle(id)
    }


    useEffect(() => {
        const getData = async () => {
            await axios.get(url).then((res) => {
                setData(res.data.Results)
            }).catch((err) => {
                console.log(err)
            })
        }
        getData()

    }, [])



    return (
        <>
            <div className='main'>
                <div className="upper">
                    <h2 className="heading">
                        Vehical Manufacturers
                    </h2>
                    <div className="searchandfilter">
                        <div className="search"><label htmlFor="search">Search: <input type="text" /></label></div>
                        <div className="filter">
                            <label htmlFor="filter">Filter by vehical type:
                                <select name="" id="" onChange={handleFilter}>
                                    <option value=""></option>
                                    <option value="car">Pasengengr car</option>
                                    <option value="truck">Truck</option>
                                    <option value="Multipurpose Passenger Vehicle">Multipurpose Passenger Vehicle</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="Trailer">Trailer</option>
                                    <option value="Low Speed Vehicle">Low Speed Vehicle</option>
                                    <option value="Off Road Vehicle">Off Road Vehicle</option>
                                    <option value="Bus">Bus</option>
                                    <option value="Incomplete Vehicle">Incomplete Vehicle</option>
                                </select>
                            </label>
                        </div>

                    </div>
                </div>

                <div className="body">
                    <table className="vehicalTable">
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Contry</th>
                                <th scope='col'>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele) => {
                            let type=''
                            ele.VehicleTypes.length===0 ? type='none' : type=ele.VehicleTypes[0].Name
                            
                                return (
                                    
                                    <tr key={ele.Mfr_ID} value={ele.Mfr_ID} onClick={()=>{setRender(true)
                                        setSingle(ele.Mfr_ID)}}>
                                        <td>{ele.Mfr_Name}</td>
                                        <td>{ele.Country}</td>
                                        <td>{type}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {render && <Singlecomponent setRender={setRender} id={single}></Singlecomponent>}
        </>
    )
}

export default Homepage