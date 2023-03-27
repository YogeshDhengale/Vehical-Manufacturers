import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Singlecomponent = ({ setRender, id }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${id}?format=json`).then((res) => {
                setData(res.data.Results)
            }).catch((err) => {
                console.log(err)
            })
        }
        getData()

    }, [])
    if (data.length !== 0) {
        return (
            <>
                <div className='main2'>
                    <div className="single">
                        <div className="singlecard">
                            <button onClick={() => { setRender(false) }}>X</button>
                            <h2>{data[0].Mfr_Name}</h2>
                            <p>{data[0].PrincipalFirstName}</p>
                            <p>{data[0].Address}</p>
                            <p>{data[0].City}</p>
                        </div>
                    </div>
                </div>
            </>
    
        )
    }
    else{
        <div className='main2'>
                    <div className="single">
                        <div className="singlecard">
                            <div>Lodaing....</div>
                        </div>
                    </div>
                </div>
    }
    
}

export default Singlecomponent