
const GrabSpecific = ({ single }) => {
    // console.log(single)
    return (
        <div>
            <h1>Breed you want</h1>
        <div className='randomDog'>
            <img src={`${single.message}`} style={{width: '200px'}}/>
        </div>
        </div>
    )
}

export default GrabSpecific;