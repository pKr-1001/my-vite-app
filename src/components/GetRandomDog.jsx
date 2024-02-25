
const GetRandomDog = ({ example }) => {
    return(
        
        <div className='randomDog'>
            <img src={`${example.message}`} style={{width: '200px'}}/>
        </div>
        
    )
}

export default GetRandomDog