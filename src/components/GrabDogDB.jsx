
const GrabDogDB = ({ local }) => {
    // console.log(local)
    return (
        <div className="images">
            <h1>Local Data</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {local.map((dog, index) => {
                    // console.log(dog)
                    return (
                        <div key={index} style={{width: '30%', padding: '5px'}}>
                        {/* <li key={index}>{dog.breed}</li> */}
                        <img src={dog.image_url} alt={dog.breed} style={{width: '100%'}}/>
                        <p>{dog.breed}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )       
}


export default GrabDogDB;