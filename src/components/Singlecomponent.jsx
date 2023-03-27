import React from 'react'

const Singlecomponent = ([single, setRender]) => {

    useEffect(() => {
        const getData = async () => {
            await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/1083?format=json`).then((res) => {
                setData(res.data.Results)
            }).catch((err) => {
                console.log(err)
            })
        }
        getData()

    }, [])
    return (
        <>
            <div className='main2'>
                <div className="single">
                <div className="singlecard">
                    <button>X</button>
                    <h2>Compony name</h2>
                    <p>Ceo</p>
                    <p>address</p>
                    <p>Country</p>
                </div>
                </div>
            </div>
        </>

    )
}

export default Singlecomponent