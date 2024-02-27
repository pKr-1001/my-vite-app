
const GetRandomDog = ({ example }) => {
    let imagesToShow = example.slice(-3)

    return(
        <div className='randomDog'>
            {
                imagesToShow.map((image, index) => {
                    return(
                        <img src={`${image}`} key={index} style={{width: '200px', height: '150px'}}/>
                    )
                })
            }
        </div>
    )
}

export default GetRandomDog