
const GrabDogDB = ({ local, handleClick }) => {
    return (
        <div className="images">
            <h1>DB</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {local.map((dog, index) => {
                    return (
                        <div key={index} style={{width: '30%', padding: '5px'}}>
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