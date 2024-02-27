
const GrabSpecific = ({ single }) => {
    return (
        <div>
            <h1>Breed you want</h1>
            {single && single.message && ( // Check if single and single.message exist
                <div className='randomDog'>
                    <img src={`${single.message}`} style={{width: '200px'}}/>
                </div>
            )}
        </div>
    );
}

export default GrabSpecific;